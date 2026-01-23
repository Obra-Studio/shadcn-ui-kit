figma.showUI(__html__, { width: 400, height: 640 });

let unboundVariables = [];
let scanCancelled = false;

// Performance constants
const BATCH_SIZE = 50;
const BATCH_DELAY = 10;

// Properties that can have bound variables, categorized by type
const COLOR_PROPERTIES = ['fills', 'strokes', 'effects'];
const RADIUS_PROPERTIES = ['cornerRadius', 'topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'];
const SPACING_PROPERTIES = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'itemSpacing', 'counterAxisSpacing'];
const OTHER_PROPERTIES = ['strokeWeight', 'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'opacity', 'layoutSizingHorizontal', 'layoutSizingVertical'];

// All properties combined
const VARIABLE_PROPERTIES = [
  ...COLOR_PROPERTIES,
  ...RADIUS_PROPERTIES,
  ...SPACING_PROPERTIES,
  ...OTHER_PROPERTIES
];

// Get property category
function getPropertyCategory(property) {
  const baseProperty = property.replace(/\[\d+\]$/, '');
  if (COLOR_PROPERTIES.includes(baseProperty)) return 'color';
  if (RADIUS_PROPERTIES.includes(baseProperty)) return 'radius';
  if (SPACING_PROPERTIES.includes(baseProperty)) return 'spacing';
  return 'other';
}

// Current filter settings
let currentFilters = { color: true, radius: true, spacing: true, other: true };

// Check if a variable binding is unbound/broken (missing reference)
// In Figma, an "unbound" variable shows as a grey raw value instead of the variable name
// This happens when:
// 1. The variable ID exists but the variable itself can't be resolved
// 2. The variable is from a remote library that's been unlinked
// 3. The variable exists but is no longer in its collection's variableIds list
async function isVariableUnbound(variableId) {
  try {
    const variable = await figma.variables.getVariableByIdAsync(variableId);

    // If we can't get the variable at all, it's definitely unbound
    if (!variable) {
      return { unbound: true, reason: 'Missing reference' };
    }

    // Log detailed info about the variable for debugging
    console.log(`    Variable details: name="${variable.name}", remote=${variable.remote}, collectionId=${variable.variableCollectionId}`);

    // Get the collection and check if this variable is actually in it
    try {
      const collection = await figma.variables.getVariableCollectionByIdAsync(variable.variableCollectionId);
      console.log(`    Collection details: name="${collection ? collection.name : 'N/A'}", remote=${collection ? collection.remote : 'N/A'}`);

      if (!collection) {
        return { unbound: true, reason: 'Collection missing', variableName: variable.name };
      }

      // Check if the variable ID is actually in the collection's list
      // This catches "orphaned" variables that exist but were deleted from the collection
      if (collection.variableIds && !collection.variableIds.includes(variableId)) {
        console.log(`    Variable ${variable.name} NOT found in collection's variableIds list!`);
        return { unbound: true, reason: 'Deleted from collection', variableName: variable.name };
      }

      // If collection is remote, flag it
      if (collection.remote) {
        return { unbound: true, reason: 'Remote library', variableName: variable.name };
      }

      // If variable is remote but collection is local, something's off
      if (variable.remote) {
        return { unbound: true, reason: 'Remote variable', variableName: variable.name };
      }

    } catch (e) {
      return { unbound: true, reason: 'Collection inaccessible', variableName: variable.name };
    }

    // Variable exists and is in a valid local collection
    return { unbound: false, variableName: variable.name };
  } catch (e) {
    // Error fetching variable means it's unbound
    return { unbound: true, reason: 'Inaccessible' };
  }
}

// Extract variable IDs from a binding object
function extractVariableIds(binding) {
  const ids = [];

  if (!binding) return ids;

  // Direct variable alias
  if (binding.type === 'VARIABLE_ALIAS' && binding.id) {
    ids.push({ id: binding.id, key: null });
  }
  // Object with id property
  else if (binding.id) {
    ids.push({ id: binding.id, key: null });
  }
  // Array of bindings (e.g., fills)
  else if (Array.isArray(binding)) {
    binding.forEach((item, index) => {
      if (item && item.id) {
        ids.push({ id: item.id, key: index });
      }
    });
  }
  // Object with multiple keys (e.g., fills with index keys)
  else if (typeof binding === 'object') {
    for (const [key, value] of Object.entries(binding)) {
      if (value && value.id) {
        ids.push({ id: value.id, key: key });
      } else if (value && value.type === 'VARIABLE_ALIAS' && value.id) {
        ids.push({ id: value.id, key: key });
      }
    }
  }

  return ids;
}

// Scan a single node for unbound variables
async function scanNodeForUnboundVariables(node) {
  const issues = [];

  // Skip page nodes
  if (node.type === 'PAGE') {
    return issues;
  }

  // Check boundVariables property
  if ('boundVariables' in node && node.boundVariables) {
    // Log all bound variables for debugging
    console.log(`Node "${node.name}" (${node.type}) has boundVariables:`, JSON.stringify(node.boundVariables, null, 2));

    for (const [property, binding] of Object.entries(node.boundVariables)) {
      // Check if this property type is enabled in filters
      const category = getPropertyCategory(property);
      if (!currentFilters[category]) {
        continue;
      }

      const variableIds = extractVariableIds(binding);
      console.log(`  Property "${property}": found ${variableIds.length} variable IDs`, variableIds);

      for (const { id, key } of variableIds) {
        const result = await isVariableUnbound(id);
        console.log(`    Variable ID ${id}: unbound=${result.unbound}, reason=${result.reason}, name=${result.variableName}`);

        if (result.unbound) {
          issues.push({
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type,
            property: key !== null ? `${property}[${key}]` : property,
            variableId: id,
            variableName: result.variableName || 'Unknown',
            reason: result.reason
          });
        }
      }
    }
  }

  return issues;
}

// Collect all nodes from a root node
function collectAllNodes(rootNode) {
  const nodes = [];

  function traverse(node) {
    nodes.push(node);
    if ('children' in node) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }

  traverse(rootNode);
  return nodes;
}

// Scan with batching for performance
async function scanWithBatching(rootNode, pageContext = null) {
  const allNodes = collectAllNodes(rootNode);
  const issues = [];

  for (let i = 0; i < allNodes.length; i += BATCH_SIZE) {
    if (scanCancelled) break;

    const batch = allNodes.slice(i, i + BATCH_SIZE);

    for (const node of batch) {
      if (scanCancelled) break;
      const nodeIssues = await scanNodeForUnboundVariables(node);
      issues.push(...nodeIssues);
    }

    // Send progress update
    if (allNodes.length > 100) {
      figma.ui.postMessage({
        type: 'scan-progress',
        processed: Math.min(i + BATCH_SIZE, allNodes.length),
        total: allNodes.length,
        pageContext: pageContext
      });
    }

    // Small delay to prevent UI blocking
    if (BATCH_DELAY > 0) {
      await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
    }
  }

  return issues;
}

// Scan current page
async function scanCurrentPage() {
  unboundVariables = [];
  scanCancelled = false;

  const currentPage = figma.currentPage;

  figma.ui.postMessage({
    type: 'scan-started',
    scanType: 'current',
    pageName: currentPage.name
  });

  try {
    unboundVariables = await scanWithBatching(currentPage);

    if (!scanCancelled) {
      figma.ui.postMessage({
        type: 'scan-complete',
        results: unboundVariables,
        scanType: 'current',
        pageName: currentPage.name
      });
    }
  } catch (error) {
    console.error('Error during scan:', error);
    figma.ui.postMessage({
      type: 'scan-error',
      message: 'Error occurred during scan: ' + error.message
    });
  }
}

// Scan all pages
async function scanAllPages() {
  unboundVariables = [];
  scanCancelled = false;

  try {
    await figma.loadAllPagesAsync();
    const allPages = figma.root.children.filter(node => node.type === 'PAGE');

    figma.ui.postMessage({
      type: 'scan-started',
      scanType: 'all',
      pageName: `All Pages (${allPages.length})`,
      totalPages: allPages.length
    });

    const pageResults = {};

    for (let i = 0; i < allPages.length; i++) {
      if (scanCancelled) {
        figma.ui.postMessage({
          type: 'scan-cancelled',
          message: 'Scan was cancelled',
          pageResults: pageResults
        });
        return;
      }

      const page = allPages[i];
      const pageContext = {
        pageName: page.name,
        pageId: page.id,
        pageIndex: i + 1,
        totalPages: allPages.length
      };

      figma.ui.postMessage({
        type: 'page-progress',
        currentPage: page.name,
        pageId: page.id,
        progress: i + 1,
        total: allPages.length
      });

      const pageIssues = await scanWithBatching(page, pageContext);
      unboundVariables.push(...pageIssues);
      pageResults[page.id] = pageIssues.length;
    }

    if (!scanCancelled) {
      figma.ui.postMessage({
        type: 'scan-complete',
        results: unboundVariables,
        scanType: 'all',
        pageName: `All Pages (${allPages.length})`,
        pageResults: pageResults
      });
    }
  } catch (error) {
    console.error('Error during scan:', error);
    figma.ui.postMessage({
      type: 'scan-error',
      message: 'Error occurred during scan: ' + error.message
    });
  }
}

// Scan selected pages only
async function scanSelectedPages(pageIds, stopOnFirstResult = false) {
  unboundVariables = [];
  scanCancelled = false;

  try {
    await figma.loadAllPagesAsync();
    const allPages = figma.root.children.filter(node => node.type === 'PAGE');
    const selectedPages = allPages.filter(page => pageIds.includes(page.id));

    figma.ui.postMessage({
      type: 'scan-started',
      scanType: 'selected',
      pageName: `${selectedPages.length} Page${selectedPages.length !== 1 ? 's' : ''}`,
      totalPages: selectedPages.length
    });

    const pageResults = {};

    for (let i = 0; i < selectedPages.length; i++) {
      if (scanCancelled) {
        figma.ui.postMessage({
          type: 'scan-cancelled',
          message: 'Scan was cancelled',
          pageResults: pageResults
        });
        return;
      }

      const page = selectedPages[i];
      const pageContext = {
        pageName: page.name,
        pageId: page.id,
        pageIndex: i + 1,
        totalPages: selectedPages.length
      };

      figma.ui.postMessage({
        type: 'page-progress',
        currentPage: page.name,
        pageId: page.id,
        progress: i + 1,
        total: selectedPages.length
      });

      const pageIssues = await scanWithBatching(page, pageContext);
      unboundVariables.push(...pageIssues);
      pageResults[page.id] = pageIssues.length;

      // Stop on first page with results if option is enabled
      if (stopOnFirstResult && pageIssues.length > 0) {
        figma.ui.postMessage({
          type: 'scan-complete',
          results: unboundVariables,
          scanType: 'selected',
          pageName: `Stopped at "${page.name}" (found ${pageIssues.length} issue${pageIssues.length !== 1 ? 's' : ''})`,
          pageResults: pageResults
        });
        return;
      }
    }

    if (!scanCancelled) {
      figma.ui.postMessage({
        type: 'scan-complete',
        results: unboundVariables,
        scanType: 'selected',
        pageName: `${selectedPages.length} Page${selectedPages.length !== 1 ? 's' : ''}`,
        pageResults: pageResults
      });
    }
  } catch (error) {
    console.error('Error during scan:', error);
    figma.ui.postMessage({
      type: 'scan-error',
      message: 'Error occurred during scan: ' + error.message
    });
  }
}

// Scan current selection
async function scanSelection() {
  unboundVariables = [];
  scanCancelled = false;

  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'scan-complete',
      results: [],
      scanType: 'selection',
      pageName: 'No selection'
    });
    return;
  }

  figma.ui.postMessage({
    type: 'scan-started',
    scanType: 'selection',
    pageName: `Selection (${selection.length} item${selection.length !== 1 ? 's' : ''})`
  });

  try {
    for (const node of selection) {
      if (scanCancelled) break;
      const nodeIssues = await scanWithBatching(node);
      unboundVariables.push(...nodeIssues);
    }

    if (!scanCancelled) {
      figma.ui.postMessage({
        type: 'scan-complete',
        results: unboundVariables,
        scanType: 'selection',
        pageName: `Selection (${selection.length} item${selection.length !== 1 ? 's' : ''})`
      });
    }
  } catch (error) {
    console.error('Error during scan:', error);
    figma.ui.postMessage({
      type: 'scan-error',
      message: 'Error occurred during scan: ' + error.message
    });
  }
}

// Row/Column Selection Functions
// Tolerance for matching positions (in pixels)
const TOLERANCE = 5;

// Move selection to adjacent sibling in a direction
function moveUp() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const yPositions = [...new Set(selection.map(n => n.y))];
  const isRow = yPositions.length === 1 && selection.length > 1;
  const minY = Math.min(...selection.map(n => n.y));

  const aboveYPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT' && child.y < minY - TOLERANCE)
      .map(child => child.y)
  )].sort((a, b) => b - a);

  if (aboveYPositions.length === 0) {
    figma.notify('No elements above');
    return;
  }

  const nextY = aboveYPositions[0];

  if (isRow) {
    const nextRowNodes = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.y - nextY) <= TOLERANCE;
    });
    figma.currentPage.selection = nextRowNodes;
    figma.notify(`Selected ${nextRowNodes.length} items in row above`);
  } else {
    const targetX = selection[0].x;
    const candidates = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.y - nextY) <= TOLERANCE;
    });

    let bestMatch = candidates[0];
    let bestDist = Math.abs(candidates[0].x - targetX);
    for (const c of candidates) {
      const dist = Math.abs(c.x - targetX);
      if (dist < bestDist) {
        bestDist = dist;
        bestMatch = c;
      }
    }

    figma.currentPage.selection = [bestMatch];
    figma.notify(`Moved to ${bestMatch.name}`);
  }
}

function moveDown() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const yPositions = [...new Set(selection.map(n => n.y))];
  const isRow = yPositions.length === 1 && selection.length > 1;
  const maxY = Math.max(...selection.map(n => n.y));

  const belowYPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT' && child.y > maxY + TOLERANCE)
      .map(child => child.y)
  )].sort((a, b) => a - b);

  if (belowYPositions.length === 0) {
    figma.notify('No elements below');
    return;
  }

  const nextY = belowYPositions[0];

  if (isRow) {
    const nextRowNodes = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.y - nextY) <= TOLERANCE;
    });
    figma.currentPage.selection = nextRowNodes;
    figma.notify(`Selected ${nextRowNodes.length} items in row below`);
  } else {
    const targetX = selection[0].x;
    const candidates = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.y - nextY) <= TOLERANCE;
    });

    let bestMatch = candidates[0];
    let bestDist = Math.abs(candidates[0].x - targetX);
    for (const c of candidates) {
      const dist = Math.abs(c.x - targetX);
      if (dist < bestDist) {
        bestDist = dist;
        bestMatch = c;
      }
    }

    figma.currentPage.selection = [bestMatch];
    figma.notify(`Moved to ${bestMatch.name}`);
  }
}

function moveLeft() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const xPositions = [...new Set(selection.map(n => n.x))];
  const isColumn = xPositions.length === 1 && selection.length > 1;
  const minX = Math.min(...selection.map(n => n.x));

  const leftXPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT' && child.x < minX - TOLERANCE)
      .map(child => child.x)
  )].sort((a, b) => b - a);

  if (leftXPositions.length === 0) {
    figma.notify('No elements to the left');
    return;
  }

  const nextX = leftXPositions[0];

  if (isColumn) {
    const nextColNodes = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.x - nextX) <= TOLERANCE;
    });
    figma.currentPage.selection = nextColNodes;
    figma.notify(`Selected ${nextColNodes.length} items in column to the left`);
  } else {
    const targetY = selection[0].y;
    const candidates = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.x - nextX) <= TOLERANCE;
    });

    let bestMatch = candidates[0];
    let bestDist = Math.abs(candidates[0].y - targetY);
    for (const c of candidates) {
      const dist = Math.abs(c.y - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestMatch = c;
      }
    }

    figma.currentPage.selection = [bestMatch];
    figma.notify(`Moved to ${bestMatch.name}`);
  }
}

function moveRight() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const xPositions = [...new Set(selection.map(n => n.x))];
  const isColumn = xPositions.length === 1 && selection.length > 1;
  const maxX = Math.max(...selection.map(n => n.x));

  const rightXPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT' && child.x > maxX + TOLERANCE)
      .map(child => child.x)
  )].sort((a, b) => a - b);

  if (rightXPositions.length === 0) {
    figma.notify('No elements to the right');
    return;
  }

  const nextX = rightXPositions[0];

  if (isColumn) {
    const nextColNodes = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.x - nextX) <= TOLERANCE;
    });
    figma.currentPage.selection = nextColNodes;
    figma.notify(`Selected ${nextColNodes.length} items in column to the right`);
  } else {
    const targetY = selection[0].y;
    const candidates = parent.children.filter(child => {
      if (child.type === 'TEXT') return false;
      return Math.abs(child.x - nextX) <= TOLERANCE;
    });

    let bestMatch = candidates[0];
    let bestDist = Math.abs(candidates[0].y - targetY);
    for (const c of candidates) {
      const dist = Math.abs(c.y - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestMatch = c;
      }
    }

    figma.currentPage.selection = [bestMatch];
    figma.notify(`Moved to ${bestMatch.name}`);
  }
}

function selectRow() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const selected = selection[0];
  const parent = selected.parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const targetY = selected.y;
  const rowNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.y - targetY) <= TOLERANCE;
  });

  figma.currentPage.selection = rowNodes;
  figma.notify(`Selected ${rowNodes.length} items in row`);
}

function selectColumn() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select an element first');
    return;
  }

  const selected = selection[0];
  const parent = selected.parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Selected element has no siblings');
    return;
  }

  const targetX = selected.x;
  const columnNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.x - targetX) <= TOLERANCE;
  });

  figma.currentPage.selection = columnNodes;
  figma.notify(`Selected ${columnNodes.length} items in column`);
}

function addNextRow() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select elements first');
    return;
  }

  const currentYPositions = [...new Set(selection.map(node => node.y))];
  const maxY = Math.max(...currentYPositions);
  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Cannot find parent container');
    return;
  }

  const allYPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT')
      .map(child => child.y)
  )].sort((a, b) => a - b);

  const nextY = allYPositions.find(y => y > maxY + TOLERANCE);

  if (nextY === undefined) {
    figma.notify('No more rows below');
    return;
  }

  const nextRowNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.y - nextY) <= TOLERANCE;
  });

  const newSelection = [...selection, ...nextRowNodes];
  figma.currentPage.selection = newSelection;
  figma.notify(`Added ${nextRowNodes.length} items from next row`);
}

function addNextColumn() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select elements first');
    return;
  }

  const currentXPositions = [...new Set(selection.map(node => node.x))];
  const maxX = Math.max(...currentXPositions);
  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Cannot find parent container');
    return;
  }

  const allXPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT')
      .map(child => child.x)
  )].sort((a, b) => a - b);

  const nextX = allXPositions.find(x => x > maxX + TOLERANCE);

  if (nextX === undefined) {
    figma.notify('No more columns to the right');
    return;
  }

  const nextColumnNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.x - nextX) <= TOLERANCE;
  });

  const newSelection = [...selection, ...nextColumnNodes];
  figma.currentPage.selection = newSelection;
  figma.notify(`Added ${nextColumnNodes.length} items from next column`);
}

function addPrevRow() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select elements first');
    return;
  }

  const currentYPositions = [...new Set(selection.map(node => node.y))];
  const minY = Math.min(...currentYPositions);
  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Cannot find parent container');
    return;
  }

  const allYPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT')
      .map(child => child.y)
  )].sort((a, b) => b - a);

  const prevY = allYPositions.find(y => y < minY - TOLERANCE);

  if (prevY === undefined) {
    figma.notify('No more rows above');
    return;
  }

  const prevRowNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.y - prevY) <= TOLERANCE;
  });

  const newSelection = [...selection, ...prevRowNodes];
  figma.currentPage.selection = newSelection;
  figma.notify(`Added ${prevRowNodes.length} items from previous row`);
}

function addPrevColumn() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify('Please select elements first');
    return;
  }

  const currentXPositions = [...new Set(selection.map(node => node.x))];
  const minX = Math.min(...currentXPositions);
  const parent = selection[0].parent;

  if (!parent || !('children' in parent)) {
    figma.notify('Cannot find parent container');
    return;
  }

  const allXPositions = [...new Set(
    parent.children
      .filter(child => child.type !== 'TEXT')
      .map(child => child.x)
  )].sort((a, b) => b - a);

  const prevX = allXPositions.find(x => x < minX - TOLERANCE);

  if (prevX === undefined) {
    figma.notify('No more columns to the left');
    return;
  }

  const prevColumnNodes = parent.children.filter(child => {
    if (child.type === 'TEXT') return false;
    return Math.abs(child.x - prevX) <= TOLERANCE;
  });

  const newSelection = [...selection, ...prevColumnNodes];
  figma.currentPage.selection = newSelection;
  figma.notify(`Added ${prevColumnNodes.length} items from previous column`);
}

// Get the base property name (without array index)
function getBaseProperty(property) {
  const match = property.match(/^([a-zA-Z]+)/);
  return match ? match[1] : property;
}

// Remove a variable binding from a node
async function removeVariableBinding(nodeId, property) {
  try {
    const node = await figma.getNodeByIdAsync(nodeId);
    if (!node) {
      return { success: false, message: 'Node not found' };
    }

    const baseProperty = getBaseProperty(property);
    const indexMatch = property.match(/\[(\d+)\]$/);
    const index = indexMatch ? parseInt(indexMatch[1]) : null;

    // Handle fills/strokes - these need special handling as you can't use setBoundVariable
    if (baseProperty === 'fills' || baseProperty === 'strokes') {
      if (baseProperty in node && Array.isArray(node[baseProperty])) {
        // Clone the paints array
        const paints = JSON.parse(JSON.stringify(node[baseProperty]));

        if (index !== null && paints[index]) {
          // The paint keeps its current color value, we just remove the variable binding
          // by setting the paints array (which doesn't include boundVariables in the clone)
          node[baseProperty] = paints;
        } else {
          // Remove all bindings by re-setting the array
          node[baseProperty] = paints;
        }
      }
      return { success: true, message: `Removed binding from ${property}` };
    }

    // Handle effects similarly
    if (baseProperty === 'effects') {
      if ('effects' in node && Array.isArray(node.effects)) {
        const effects = JSON.parse(JSON.stringify(node.effects));
        node.effects = effects;
      }
      return { success: true, message: `Removed binding from ${property}` };
    }

    // For other properties, use setBoundVariable
    if ('setBoundVariable' in node) {
      node.setBoundVariable(baseProperty, null);
    }

    return { success: true, message: `Removed binding from ${property}` };
  } catch (error) {
    console.error('Error removing binding:', error);
    return { success: false, message: error.message };
  }
}

// Navigate to and select a node
async function navigateToNode(nodeId) {
  try {
    const node = await figma.getNodeByIdAsync(nodeId);

    if (!node) {
      figma.ui.postMessage({
        type: 'navigate-error',
        message: 'Node not found. It may have been deleted.'
      });
      return;
    }

    // Find the containing page
    let currentNode = node;
    while (currentNode && currentNode.type !== 'PAGE') {
      currentNode = currentNode.parent;
    }

    if (currentNode && currentNode.type === 'PAGE') {
      // Switch to the correct page if needed
      if (currentNode !== figma.currentPage) {
        await figma.setCurrentPageAsync(currentNode);
      }
    }

    // Select and zoom to the node
    figma.currentPage.selection = [node];
    figma.viewport.scrollAndZoomIntoView([node]);

    figma.ui.postMessage({
      type: 'navigate-success',
      nodeName: node.name
    });
  } catch (error) {
    console.error('Error navigating to node:', error);
    figma.ui.postMessage({
      type: 'navigate-error',
      message: 'Error navigating to node: ' + error.message
    });
  }
}

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'scan-current':
      if (msg.filters) currentFilters = msg.filters;
      await scanCurrentPage();
      break;

    case 'scan-all':
      if (msg.filters) currentFilters = msg.filters;
      await scanAllPages();
      break;

    case 'get-pages':
      const allPages = figma.root.children.filter(node => node.type === 'PAGE');
      figma.ui.postMessage({
        type: 'pages-list',
        pages: allPages.map(page => ({ id: page.id, name: page.name }))
      });
      break;

    case 'scan-pages':
      if (msg.filters) currentFilters = msg.filters;
      await scanSelectedPages(msg.pageIds, msg.stopOnFirst || false);
      break;

    case 'scan-selection':
      if (msg.filters) currentFilters = msg.filters;
      await scanSelection();
      break;

    case 'cancel-scan':
      scanCancelled = true;
      break;

    case 'navigate-to-node':
      await navigateToNode(msg.nodeId);
      break;

    // D-pad move handlers
    case 'move-up':
      moveUp();
      break;

    case 'move-down':
      moveDown();
      break;

    case 'move-left':
      moveLeft();
      break;

    case 'move-right':
      moveRight();
      break;

    // Row/Column expand handlers
    case 'select-row':
      selectRow();
      break;

    case 'select-column':
      selectColumn();
      break;

    case 'add-next-row':
      addNextRow();
      break;

    case 'add-next-column':
      addNextColumn();
      break;

    case 'add-prev-row':
      addPrevRow();
      break;

    case 'add-prev-column':
      addPrevColumn();
      break;

    case 'remove-binding':
      const removeResult = await removeVariableBinding(msg.nodeId, msg.property);
      figma.ui.postMessage({
        type: 'fix-result',
        success: removeResult.success,
        message: removeResult.message,
        issueIndex: msg.issueIndex,
        action: 'remove'
      });
      if (removeResult.success) {
        figma.notify('Binding removed');
      }
      break;

    case 'batch-unlink':
      const issues = msg.issues;
      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < issues.length; i++) {
        const issue = issues[i];
        const result = await removeVariableBinding(issue.nodeId, issue.property);
        if (result.success) {
          successCount++;
        } else {
          failCount++;
        }

        // Send progress update
        figma.ui.postMessage({
          type: 'batch-unlink-progress',
          current: i + 1,
          total: issues.length
        });
      }

      figma.ui.postMessage({
        type: 'batch-unlink-complete',
        successCount,
        failCount
      });

      if (failCount === 0) {
        figma.notify(`Unlinked ${successCount} variable binding${successCount !== 1 ? 's' : ''}`);
      } else {
        figma.notify(`Unlinked ${successCount}, failed ${failCount}`);
      }
      break;

    case 'close':
      figma.closePlugin();
      break;
  }
};
