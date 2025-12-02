// Figma Plugin: Variables to Tailwind/shadcn CSS
// Reads Figma variable collections and generates CSS with resolved values using templates

// ============================================
// Color Conversion Functions
// ============================================

function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function rgbaToOklch(r, g, b, a) {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l = Math.cbrt(l_);
  const m = Math.cbrt(m_);
  const s = Math.cbrt(s_);

  const L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;

  const C = Math.sqrt(A * A + B * B);
  let H = Math.atan2(B, A) * (180 / Math.PI);
  if (H < 0) H += 360;

  return {
    l: Math.round(L * 1000) / 1000,
    c: Math.round(C * 1000) / 1000,
    h: Math.round(H * 1000) / 1000,
    a: a
  };
}

function formatOklch(oklch) {
  const chroma = oklch.c < 0.001 ? 0 : oklch.c;
  const hue = chroma === 0 ? 0 : oklch.h;

  if (oklch.a < 1) {
    return `oklch(${oklch.l} ${chroma} ${hue} / ${Math.round(oklch.a * 100)}%)`;
  }
  return `oklch(${oklch.l} ${chroma} ${hue})`;
}

function pxToRem(px) {
  if (px === 0) return '0';
  const rem = px / 16;
  // Round to 4 decimal places to avoid floating point precision issues
  const rounded = Math.round(rem * 10000) / 10000;
  return rounded + 'rem';
}

// Convert font weight names to CSS numeric values
function fontWeightToCSS(weight) {
  if (typeof weight === 'number') return weight;
  const w = String(weight).toLowerCase().trim();
  const weightMap = {
    'thin': 100,
    'hairline': 100,
    'extralight': 200,
    'extra light': 200,
    'ultralight': 200,
    'ultra light': 200,
    'light': 300,
    'normal': 400,
    'regular': 400,
    'book': 400,
    'medium': 500,
    'semibold': 600,
    'semi bold': 600,
    'semi-bold': 600,
    'demibold': 600,
    'demi bold': 600,
    'demi-bold': 600,
    'bold': 700,
    'extrabold': 800,
    'extra bold': 800,
    'extra-bold': 800,
    'ultrabold': 800,
    'ultra bold': 800,
    'ultra-bold': 800,
    'black': 900,
    'heavy': 900
  };
  return weightMap[w] || weight;
}

// Filter out unofficial variables from generated CSS
function filterUnofficialVariables(css) {
  // List of unofficial variable patterns to remove
  const unofficialPatterns = [
    /^\s*--accent-0:.*$/gm,
    /^\s*--accent-2:.*$/gm,
    /^\s*--accent-3:.*$/gm,
    /^\s*--border-0:.*$/gm,
    /^\s*--border-1:.*$/gm,
    /^\s*--border-3:.*$/gm,
    /^\s*--border-4:.*$/gm,
    /^\s*--border-5:.*$/gm,
    /^\s*--outline:.*$/gm,
    /^\s*--outline-hover:.*$/gm,
    /^\s*--outline-active:.*$/gm,
    /^\s*--ghost:.*$/gm,
    /^\s*--ghost-hover:.*$/gm,
    /^\s*--ghost-active:.*$/gm,
    /^\s*--color-accent-0:.*$/gm,
    /^\s*--color-accent-2:.*$/gm,
    /^\s*--color-accent-3:.*$/gm,
    /^\s*--color-border-0:.*$/gm,
    /^\s*--color-border-1:.*$/gm,
    /^\s*--color-border-3:.*$/gm,
    /^\s*--color-border-4:.*$/gm,
    /^\s*--color-border-5:.*$/gm,
    /^\s*--color-outline:.*$/gm,
    /^\s*--color-outline-hover:.*$/gm,
    /^\s*--color-outline-active:.*$/gm,
    /^\s*--color-ghost:.*$/gm,
    /^\s*--color-ghost-hover:.*$/gm,
    /^\s*--color-ghost-active:.*$/gm
  ];

  let filteredCss = css;
  for (const pattern of unofficialPatterns) {
    filteredCss = filteredCss.replace(pattern, '');
  }

  // Clean up any resulting empty lines (multiple newlines in a row)
  filteredCss = filteredCss.replace(/\n\s*\n\s*\n/g, '\n\n');

  return filteredCss;
}

// ============================================
// Variable Resolution
// ============================================

async function resolveVariableValue(variableValue, modeId, visited = new Set()) {
  if (variableValue && typeof variableValue === 'object' && 'r' in variableValue) {
    return variableValue;
  }

  if (typeof variableValue === 'number') {
    return variableValue;
  }

  if (typeof variableValue === 'string') {
    return variableValue;
  }

  if (variableValue && typeof variableValue === 'object' && variableValue.type === 'VARIABLE_ALIAS') {
    const aliasId = variableValue.id;

    if (visited.has(aliasId)) {
      return null;
    }
    visited.add(aliasId);

    const referencedVariable = await figma.variables.getVariableByIdAsync(aliasId);
    if (!referencedVariable) {
      return null;
    }

    let value = referencedVariable.valuesByMode[modeId];

    if (value === undefined) {
      const collection = await figma.variables.getVariableCollectionByIdAsync(referencedVariable.variableCollectionId);
      if (collection) {
        value = referencedVariable.valuesByMode[collection.defaultModeId];
      }
    }

    return await resolveVariableValue(value, modeId, visited);
  }

  return variableValue;
}

// ============================================
// Data Collection
// ============================================

async function collectVariableData() {
  const collections = [];

  try {
    const localCollections = await figma.variables.getLocalVariableCollectionsAsync();

    for (const collection of localCollections) {
      const modes = collection.modes.map(mode => ({
        modeId: mode.modeId,
        name: mode.name
      }));

      const variables = [];

      for (const variableId of collection.variableIds) {
        const variable = await figma.variables.getVariableByIdAsync(variableId);
        if (variable) {
          variables.push({
            id: variable.id,
            name: variable.name,
            resolvedType: variable.resolvedType,
            valuesByMode: variable.valuesByMode
          });
        }
      }

      collections.push({
        id: collection.id,
        name: collection.name,
        modes: modes,
        defaultModeId: collection.defaultModeId,
        variables: variables
      });
    }
  } catch (error) {
    console.error('Error collecting variables:', error);
  }

  return collections;
}

// ============================================
// Template Detection
// ============================================

function getCollectionTemplate(collectionName) {
  const name = collectionName.toLowerCase();

  if (name.includes('semantic') && name.includes('color')) {
    return 'semantic-colors';
  }
  if (name.includes('chart') && name.includes('color')) {
    return 'chart-colors';
  }
  if (name.includes('typography') || name.includes('font')) {
    return 'typography';
  }
  if (name.includes('border') && name.includes('radi')) {
    return 'border-radii';
  }
  if (name.includes('shadow')) {
    return 'shadows';
  }
  if (name.includes('spacing') && !name.includes('absolute')) {
    return 'spacing';
  }

  return null;
}

// ============================================
// Template: Semantic Colors
// ============================================

const SEMANTIC_COLOR_ORDER = [
  'background', 'foreground',
  'card', 'card-foreground',
  'popover', 'popover-foreground',
  'primary', 'primary-foreground',
  'secondary', 'secondary-foreground',
  'muted', 'muted-foreground',
  'accent', 'accent-foreground',
  'accent-0', 'accent-2', 'accent-3',
  'destructive', 'destructive-foreground',
  'border', 'input', 'ring', 'ring-error',
  'border-0', 'border-1', 'border-3', 'border-4', 'border-5',
  'outline', 'outline-hover', 'outline-active',
  'ghost', 'ghost-hover', 'ghost-active',
  'sidebar', 'sidebar-foreground',
  'sidebar-primary', 'sidebar-primary-foreground',
  'sidebar-accent', 'sidebar-accent-foreground',
  'sidebar-border', 'sidebar-ring'
];

async function collectSemanticColors(collection, modeId) {
  const variables = new Map();

  for (const variable of collection.variables) {
    if (variable.resolvedType !== 'COLOR') continue;

    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (!resolvedValue || typeof resolvedValue !== 'object' || !('r' in resolvedValue)) continue;

    const oklch = rgbaToOklch(
      resolvedValue.r,
      resolvedValue.g,
      resolvedValue.b,
      resolvedValue.a !== undefined ? resolvedValue.a : 1
    );

    const cssName = mapSemanticColorName(variable.name);
    if (cssName) {
      variables.set(cssName, formatOklch(oklch));
    }
  }

  return variables;
}

async function generateSemanticColorsCSS(collection, modeId, darkModeId = null) {
  const lightVariables = await collectSemanticColors(collection, modeId);
  const darkVariables = darkModeId ? await collectSemanticColors(collection, darkModeId) : null;

  // Build :root section (light mode)
  let css = ':root {\n';

  for (const key of SEMANTIC_COLOR_ORDER) {
    if (lightVariables.has(key)) {
      css += `  --${key}: ${lightVariables.get(key)};\n`;
    }
  }

  css += '}\n';

  // Build .dark section if dark mode is available
  if (darkVariables && darkVariables.size > 0) {
    css += '\n.dark {\n';

    for (const key of SEMANTIC_COLOR_ORDER) {
      if (darkVariables.has(key)) {
        css += `  --${key}: ${darkVariables.get(key)};\n`;
      }
    }

    css += '}\n';
  }

  // Build @theme inline section
  css += '\n@theme inline {\n';

  for (const key of SEMANTIC_COLOR_ORDER) {
    if (lightVariables.has(key)) {
      css += `  --color-${key}: var(--${key});\n`;
    }
  }

  css += '}\n';

  return css;
}

function mapSemanticColorName(figmaName) {
  const normalized = figmaName.toLowerCase().trim();
  const parts = normalized.split('/');
  const lastPart = parts[parts.length - 1].trim();

  // Direct mappings
  const mappings = {
    'background': 'background',
    'foreground': 'foreground',
    'primary': 'primary',
    'primary foreground': 'primary-foreground',
    'secondary': 'secondary',
    'secondary foreground': 'secondary-foreground',
    'muted': 'muted',
    'muted foreground': 'muted-foreground',
    'accent': 'accent',
    'accent foreground': 'accent-foreground',
    'accent 0': 'accent-0',
    'accent 2': 'accent-2',
    'accent 3': 'accent-3',
    'destructive': 'destructive',
    'destructive foreground': 'destructive-foreground',
    'border': 'border',
    'input': 'input',
    'ring': 'ring',
    'ring error': 'ring-error',
    'border 0': 'border-0',
    'border 1': 'border-1',
    'border 3': 'border-3',
    'border 4': 'border-4',
    'border 5': 'border-5',
    'outline': 'outline',
    'outline hover': 'outline-hover',
    'outline active': 'outline-active',
    'ghost': 'ghost',
    'ghost hover': 'ghost-hover',
    'ghost active': 'ghost-active',
    'card': 'card',
    'card foreground': 'card-foreground',
    'popover': 'popover',
    'popover foreground': 'popover-foreground',
    'sidebar': 'sidebar',
    'sidebar foreground': 'sidebar-foreground',
    'sidebar border': 'sidebar-border',
    'sidebar ring': 'sidebar-ring',
    'sidebar primary': 'sidebar-primary',
    'sidebar primary foreground': 'sidebar-primary-foreground',
    'sidebar accent': 'sidebar-accent',
    'sidebar accent foreground': 'sidebar-accent-foreground'
  };

  if (mappings[lastPart]) {
    return mappings[lastPart];
  }

  return null;
}

// ============================================
// Template: Chart Colors
// ============================================

async function collectChartColors(collection, modeId) {
  const chartColors = new Map();
  const sentimentColors = new Map();

  for (const variable of collection.variables) {
    if (variable.resolvedType !== 'COLOR') continue;

    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (!resolvedValue || typeof resolvedValue !== 'object' || !('r' in resolvedValue)) continue;

    const oklch = rgbaToOklch(
      resolvedValue.r,
      resolvedValue.g,
      resolvedValue.b,
      resolvedValue.a !== undefined ? resolvedValue.a : 1
    );

    const name = variable.name.toLowerCase();
    const parts = name.split('/');
    const lastPart = parts[parts.length - 1].trim();

    // Extract from "categorical" group: "categorical/chart 1" -> "chart-1" or "categorical/1" -> "chart-1"
    // Limit to chart-1 through chart-5 (shadcn convention)
    if (name.includes('categorical')) {
      // Match patterns like "chart 1", "chart-1", "chart1", or just "1"
      const chartMatch = lastPart.match(/^(?:chart\s*)?([1-5])$/);
      if (chartMatch) {
        chartColors.set(chartMatch[1], formatOklch(oklch));
      }
    }

    // Extract from "sentiment" group: "sentiment/positive-foreground" -> "positive-foreground"
    if (name.includes('sentiment')) {
      if (lastPart.includes('positive')) {
        sentimentColors.set('positive-foreground', formatOklch(oklch));
      } else if (lastPart.includes('negative')) {
        sentimentColors.set('negative-foreground', formatOklch(oklch));
      }
    }
  }

  return { chartColors, sentimentColors };
}

async function generateChartColorsCSS(collection, modeId, darkModeId = null) {
  const lightData = await collectChartColors(collection, modeId);
  const darkData = darkModeId ? await collectChartColors(collection, darkModeId) : null;

  const lightChartColors = lightData.chartColors;
  const lightSentimentColors = lightData.sentimentColors;

  if (lightChartColors.size === 0 && lightSentimentColors.size === 0) {
    return '';
  }

  // Build :root section (light mode)
  let css = ':root {\n';

  // Output chart colors in order (1, 2, 3, 4, 5)
  const sortedKeys = Array.from(lightChartColors.keys()).sort((a, b) => parseInt(a) - parseInt(b));
  for (const key of sortedKeys) {
    css += `  --chart-${key}: ${lightChartColors.get(key)};\n`;
  }

  // Output sentiment colors
  if (lightSentimentColors.has('positive-foreground')) {
    css += `  --positive-foreground: ${lightSentimentColors.get('positive-foreground')};\n`;
  }
  if (lightSentimentColors.has('negative-foreground')) {
    css += `  --negative-foreground: ${lightSentimentColors.get('negative-foreground')};\n`;
  }

  css += '}\n';

  // Build .dark section if dark mode is available
  if (darkData && (darkData.chartColors.size > 0 || darkData.sentimentColors.size > 0)) {
    css += '\n.dark {\n';

    const darkSortedKeys = Array.from(darkData.chartColors.keys()).sort((a, b) => parseInt(a) - parseInt(b));
    for (const key of darkSortedKeys) {
      css += `  --chart-${key}: ${darkData.chartColors.get(key)};\n`;
    }

    if (darkData.sentimentColors.has('positive-foreground')) {
      css += `  --positive-foreground: ${darkData.sentimentColors.get('positive-foreground')};\n`;
    }
    if (darkData.sentimentColors.has('negative-foreground')) {
      css += `  --negative-foreground: ${darkData.sentimentColors.get('negative-foreground')};\n`;
    }

    css += '}\n';
  }

  // Build @theme inline section
  css += '\n@theme inline {\n';

  for (const key of sortedKeys) {
    css += `  --color-chart-${key}: var(--chart-${key});\n`;
  }

  if (lightSentimentColors.has('positive-foreground')) {
    css += '  --color-positive-foreground: var(--positive-foreground);\n';
  }
  if (lightSentimentColors.has('negative-foreground')) {
    css += '  --color-negative-foreground: var(--negative-foreground);\n';
  }

  css += '}\n';

  return css;
}

// ============================================
// Template: Typography
// ============================================

async function generateTypographyCSS(collection, modeId) {
  const fontFamilies = new Map();
  const fontWeights = new Map();
  const textStyles = new Map();

  // Text style definitions: name -> { size, lineHeight, letterSpacing, weight }
  const styleNames = [
    'display 1', 'display 2',
    'heading 1', 'heading 2', 'heading 3', 'heading 4',
    'paragraph xl', 'paragraph large', 'paragraph regular', 'paragraph small', 'paragraph mini'
  ];

  for (const variable of collection.variables) {
    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (resolvedValue === null || resolvedValue === undefined) continue;

    const name = variable.name.toLowerCase();

    // Font families from "font definitions" group
    if (variable.resolvedType === 'STRING' && typeof resolvedValue === 'string') {
      if (name.includes('font-family-body') || name.includes('font-family-sans')) {
        fontFamilies.set('font-sans', formatFontStack(resolvedValue, 'sans'));
      } else if (name.includes('font-family-heading')) {
        fontFamilies.set('font-heading', formatFontStack(resolvedValue, 'sans'));
      } else if (name.includes('font-family-mono') || name.includes('monospace')) {
        fontFamilies.set('font-mono', formatFontStack(resolvedValue, 'mono'));
      } else if (name.includes('font-family-serif')) {
        fontFamilies.set('font-serif', formatFontStack(resolvedValue, 'serif'));
      }

      // Font weights - e.g. "paragraph/paragraph-regular-weight" -> 400
      if (name.includes('regular-weight') || name.includes('regular weight')) {
        fontWeights.set('font-weight-regular', fontWeightToCSS(resolvedValue));
      } else if (name.includes('medium-weight') || name.includes('medium weight')) {
        fontWeights.set('font-weight-medium', fontWeightToCSS(resolvedValue));
      } else if (name.includes('bold-weight') || name.includes('bold weight') || name.includes('semibold-weight')) {
        fontWeights.set('font-weight-bold', fontWeightToCSS(resolvedValue));
      }
    }

    // Extract text style properties (size, lineHeight, letterSpacing)
    if (variable.resolvedType === 'FLOAT' && typeof resolvedValue === 'number') {
      for (const styleName of styleNames) {
        if (name.includes(styleName.replace(' ', '/')) || name.includes(styleName.replace(' ', '-')) || name.includes(styleName)) {
          if (!textStyles.has(styleName)) {
            textStyles.set(styleName, {});
          }
          const style = textStyles.get(styleName);

          if (name.includes('font-size') || name.includes('font size')) {
            style.size = resolvedValue;
          } else if (name.includes('line-height') || name.includes('line height')) {
            style.lineHeight = resolvedValue;
          } else if (name.includes('letter-spacing') || name.includes('letter spacing')) {
            style.letterSpacing = resolvedValue;
          }
        }
      }
    }

    // Extract per-style font weights (e.g., "heading 1/heading-1-weight" -> semibold)
    if (variable.resolvedType === 'STRING' && typeof resolvedValue === 'string') {
      for (const styleName of styleNames) {
        const stylePattern1 = styleName.replace(' ', '/');
        const stylePattern2 = styleName.replace(' ', '-');
        if ((name.includes(stylePattern1) || name.includes(stylePattern2) || name.includes(styleName)) &&
            (name.includes('weight') || name.includes('-weight'))) {
          if (!textStyles.has(styleName)) {
            textStyles.set(styleName, {});
          }
          textStyles.get(styleName).weight = fontWeightToCSS(resolvedValue);
        }
      }
    }
  }

  if (fontFamilies.size === 0 && textStyles.size === 0 && fontWeights.size === 0) {
    return '';
  }

  // Build CSS
  let css = ':root {\n';

  // Output font families
  if (fontFamilies.has('font-sans')) {
    css += `  --font-sans: ${fontFamilies.get('font-sans')};\n`;
  }
  if (fontFamilies.has('font-heading')) {
    css += `  --font-heading: ${fontFamilies.get('font-heading')};\n`;
  }
  if (fontFamilies.has('font-mono')) {
    css += `  --font-mono: ${fontFamilies.get('font-mono')};\n`;
  }
  if (fontFamilies.has('font-serif')) {
    css += `  --font-serif: ${fontFamilies.get('font-serif')};\n`;
  }

  // Output font weights
  if (fontWeights.has('font-weight-regular')) {
    css += `  --font-weight-regular: ${fontWeights.get('font-weight-regular')};\n`;
  }
  if (fontWeights.has('font-weight-medium')) {
    css += `  --font-weight-medium: ${fontWeights.get('font-weight-medium')};\n`;
  }
  if (fontWeights.has('font-weight-bold')) {
    css += `  --font-weight-bold: ${fontWeights.get('font-weight-bold')};\n`;
  }

  // Output text style variables
  for (const styleName of styleNames) {
    if (textStyles.has(styleName)) {
      const style = textStyles.get(styleName);
      const varName = styleName.replace(/ /g, '-');

      if (style.size) {
        css += `  --text-${varName}-size: ${pxToRem(style.size)};\n`;
      }
      if (style.lineHeight) {
        // Line height can be absolute (px) or relative
        const lh = style.lineHeight > 10 ? pxToRem(style.lineHeight) : style.lineHeight;
        css += `  --text-${varName}-leading: ${lh};\n`;
      }
      if (style.letterSpacing) {
        css += `  --text-${varName}-tracking: ${(style.letterSpacing / (style.size || 16)).toFixed(3)}em;\n`;
      }
      if (style.weight) {
        css += `  --text-${varName}-weight: ${style.weight};\n`;
      }
    }
  }

  css += '}\n';

  // @theme inline - font families
  css += '\n@theme inline {\n';

  if (fontFamilies.has('font-sans')) {
    css += '  --font-sans: var(--font-sans);\n';
  }
  if (fontFamilies.has('font-heading')) {
    css += '  --font-heading: var(--font-heading);\n';
  }
  if (fontFamilies.has('font-mono')) {
    css += '  --font-mono: var(--font-mono);\n';
  }
  if (fontFamilies.has('font-serif')) {
    css += '  --font-serif: var(--font-serif);\n';
  }

  // Font weights
  if (fontWeights.has('font-weight-regular')) {
    css += '  --font-weight-regular: var(--font-weight-regular);\n';
  }
  if (fontWeights.has('font-weight-medium')) {
    css += '  --font-weight-medium: var(--font-weight-medium);\n';
  }
  if (fontWeights.has('font-weight-bold')) {
    css += '  --font-weight-bold: var(--font-weight-bold);\n';
  }

  // Text size classes
  for (const styleName of styleNames) {
    if (textStyles.has(styleName)) {
      const style = textStyles.get(styleName);
      const varName = styleName.replace(/ /g, '-');

      if (style.size) {
        css += `  --text-${varName}: var(--text-${varName}-size);\n`;
      }
    }
  }

  css += '}\n';

  return css;
}

function formatFontStack(fontName, type) {
  const quotedFont = fontName.includes(' ') ? `"${fontName}"` : fontName;

  if (type === 'mono') {
    return `${quotedFont}, monospace`;
  } else if (type === 'serif') {
    return `${quotedFont}, serif`;
  } else {
    return `${quotedFont}, sans-serif`;
  }
}

// ============================================
// Template: Border Radii
// ============================================

async function generateBorderRadiiCSS(collection, modeId) {
  const radiusValues = new Map();

  // Map Figma variable names to CSS variable names
  const nameMapping = {
    'rounded-none': 'radius-none',
    'rounded-xs': 'radius-xs',
    'rounded-sm': 'radius-sm',
    'rounded-md': 'radius-md',
    'rounded-lg': 'radius-lg',
    'rounded-xl': 'radius-xl',
    'rounded-2xl': 'radius-2xl',
    'rounded-3xl': 'radius-3xl',
    'rounded-full': 'radius-full'
  };

  for (const variable of collection.variables) {
    if (variable.resolvedType !== 'FLOAT') continue;

    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (typeof resolvedValue !== 'number') continue;

    const name = variable.name.toLowerCase();

    // Check if this matches any of our expected variable names
    for (const [figmaName, cssName] of Object.entries(nameMapping)) {
      if (name === figmaName || name.endsWith('/' + figmaName)) {
        radiusValues.set(cssName, resolvedValue);
        break;
      }
    }
  }

  // Get the base radius (lg) for shadcn compatibility
  const baseRadius = radiusValues.get('radius-lg') || 8;

  // Build CSS
  let css = ':root {\n';
  css += `  --radius: ${pxToRem(baseRadius)};\n`;
  css += '}\n';

  css += '\n@theme {\n';

  // Output radius values in order
  const radiusOrder = ['radius-xs', 'radius-sm', 'radius-md', 'radius-lg', 'radius-xl', 'radius-2xl', 'radius-3xl', 'radius-full'];

  for (const cssName of radiusOrder) {
    if (radiusValues.has(cssName)) {
      const value = radiusValues.get(cssName);

      if (cssName === 'radius-lg') {
        // Use var(--radius) for lg to maintain shadcn compatibility
        css += `  --${cssName}: var(--radius);\n`;
      } else if (cssName === 'radius-full' || value >= 9999) {
        // Full radius is special - use 9999px
        css += `  --${cssName}: 9999px;\n`;
      } else {
        css += `  --${cssName}: ${pxToRem(value)};\n`;
      }
    }
  }

  css += '}\n';

  return css;
}

// ============================================
// Template: Shadows
// ============================================

async function generateShadowsCSS(collection, modeId) {
  const shadowParts = new Map();

  // Debug: Log all variable names to understand the structure
  console.log('Shadow collection variables:');
  for (const variable of collection.variables) {
    console.log(`  ${variable.name} (${variable.resolvedType})`);
  }

  for (const variable of collection.variables) {
    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (resolvedValue === null || resolvedValue === undefined) continue;

    const name = variable.name.toLowerCase();

    // Parse shadow variable names
    // Pattern 1: "shadows/sm/shadow 1/x" or "shadow/sm/shadow 1/x"
    // Pattern 2: "sm/shadow 1/x" or "sm/1/x"
    // Pattern 3: "shadow-sm-x" or "shadow-sm-1-x"
    const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

    for (const size of sizes) {
      // Check various patterns for size matching
      const sizeMatches =
        name.includes(`/${size}/`) ||
        name.includes(`/${size}-`) ||
        name.includes(`-${size}/`) ||
        name.includes(`-${size}-`) ||
        name.startsWith(`${size}/`) ||
        name.startsWith(`${size}-`);

      if (sizeMatches) {
        // Determine which layer (0, 1, or 2) - check for variations
        let layer = '0';
        if (name.includes('shadow 2') || name.includes('shadow-2') || name.includes('/2/') || name.includes('-2-')) {
          layer = '2';
        } else if (name.includes('shadow 1') || name.includes('shadow-1') || name.includes('/1/') || name.includes('-1-')) {
          layer = '1';
        }
        const prefix = `${size}-${layer}`;

        // Match property names with various separators
        if (name.endsWith('/x') || name.endsWith('-x') || name.includes('/x/') || name.match(/[\/-]x[0-9]*$/)) {
          shadowParts.set(`${prefix}-x`, resolvedValue);
        } else if (name.endsWith('/y') || name.endsWith('-y') || name.includes('/y/')) {
          shadowParts.set(`${prefix}-y`, resolvedValue);
        } else if (name.endsWith('/blur') || name.endsWith('-blur') || name.includes('/blur/')) {
          shadowParts.set(`${prefix}-blur`, resolvedValue);
        } else if (name.endsWith('/spread') || name.endsWith('-spread') || name.includes('/spread/')) {
          shadowParts.set(`${prefix}-spread`, resolvedValue);
        } else if (name.endsWith('/color') || name.endsWith('-color') || name.includes('/color/')) {
          shadowParts.set(`${prefix}-color`, resolvedValue);
        }

        break;
      }
    }
  }

  // Build shadow composites
  const shadows = buildShadowValues(shadowParts);

  // Build CSS
  let css = ':root {\n';

  // Add individual shadow component variables (optional, for customization)
  css += '  --shadow-x: 0;\n';
  css += '  --shadow-y: 1px;\n';
  css += '  --shadow-blur: 3px;\n';
  css += '  --shadow-spread: 0;\n';
  css += '  --shadow-opacity: 0.1;\n';
  css += '  --shadow-color: oklch(0 0 0);\n\n';

  // Shadow composites
  const defaultShadows = {
    '2xs': '0 1px 3px 0 hsl(0 0% 0% / 0.05)',
    'xs': '0 1px 3px 0 hsl(0 0% 0% / 0.05)',
    'sm': '0 1px 3px 0 hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)',
    'shadow': '0 1px 3px 0 hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)',
    'md': '0 1px 3px 0 hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)',
    'lg': '0 1px 3px 0 hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)',
    'xl': '0 1px 3px 0 hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)',
    '2xl': '0 1px 3px 0 hsl(0 0% 0% / 0.25)'
  };

  for (const [size, defaultVal] of Object.entries(defaultShadows)) {
    const varName = size === 'shadow' ? 'shadow' : `shadow-${size}`;
    const value = shadows.get(size) || defaultVal;
    css += `  --${varName}: ${value};\n`;
  }

  css += '}\n';

  // @theme block
  css += '\n@theme {\n';
  css += '  --shadow-2xs: var(--shadow-2xs);\n';
  css += '  --shadow-xs: var(--shadow-xs);\n';
  css += '  --shadow-sm: var(--shadow-sm);\n';
  css += '  --shadow: var(--shadow);\n';
  css += '  --shadow-md: var(--shadow-md);\n';
  css += '  --shadow-lg: var(--shadow-lg);\n';
  css += '  --shadow-xl: var(--shadow-xl);\n';
  css += '  --shadow-2xl: var(--shadow-2xl);\n';
  css += '}\n';

  return css;
}

function buildShadowValues(shadowParts) {
  const shadows = new Map();
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

  for (const size of sizes) {
    const shadowLayers = [];

    for (const layer of ['0', '1', '2']) {
      const prefix = `${size}-${layer}`;

      const x = shadowParts.get(`${prefix}-x`);
      const y = shadowParts.get(`${prefix}-y`);
      const blur = shadowParts.get(`${prefix}-blur`);
      const spread = shadowParts.get(`${prefix}-spread`);
      const color = shadowParts.get(`${prefix}-color`);

      if (x !== undefined && y !== undefined) {
        let shadowColor = color;
        if (!shadowColor) {
          shadowColor = shadowParts.get(`${size}-0-color`) || shadowParts.get(`${size}-1-color`);
        }

        if (shadowColor) {
          const colorStr = formatShadowColor(shadowColor);
          const blurVal = blur !== undefined ? blur : 0;
          const spreadVal = spread !== undefined ? spread : 0;

          // Format values without units for zero values
          const xStr = x === 0 ? '0' : `${x}px`;
          const yStr = y === 0 ? '0' : `${y}px`;
          const blurStr = blurVal === 0 ? '0' : `${blurVal}px`;
          const spreadStr = spreadVal === 0 ? '0' : `${spreadVal}px`;

          shadowLayers.push(`${xStr} ${yStr} ${blurStr} ${spreadStr} ${colorStr}`);
        }
      }
    }

    if (shadowLayers.length > 0) {
      shadows.set(size, shadowLayers.join(', '));
    }
  }

  return shadows;
}

function formatShadowColor(color) {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a !== undefined ? color.a : 1;

  if (a < 1) {
    return `hsl(0 0% ${Math.round((r + g + b) / 7.65)}% / ${a.toFixed(2)})`;
  }
  return `hsl(0 0% ${Math.round((r + g + b) / 7.65)}%)`;
}

// ============================================
// Template: Spacing
// ============================================

async function generateSpacingCSS(collection, modeId) {
  const spacingValues = new Map();

  // Named spacing scale order (like border radii)
  const namedSpacingOrder = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

  // Numeric Tailwind spacing scale order (fallback)
  const numericSpacingOrder = [
    '0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56',
    '60', '64', '72', '80', '96'
  ];

  for (const variable of collection.variables) {
    if (variable.resolvedType !== 'FLOAT') continue;

    const rawValue = variable.valuesByMode[modeId];
    if (rawValue === undefined || rawValue === null) continue;

    const resolvedValue = await resolveVariableValue(rawValue, modeId);
    if (typeof resolvedValue !== 'number') continue;

    const name = variable.name.toLowerCase();
    const parts = name.split('/');
    const lastPart = parts[parts.length - 1].trim();

    // Check for named spacing (3xs, 2xs, xs, sm, md, lg, xl, 2xl, etc.)
    if (namedSpacingOrder.includes(lastPart)) {
      spacingValues.set(lastPart, resolvedValue);
      continue;
    }

    // Check for numeric spacing (0, 0.5, 1, 2, etc.)
    const slashMatch = name.match(/\/([0-9.]+)$/);
    const dashMatch = name.match(/-([0-9.]+)$/);

    let spacingKey = null;
    if (slashMatch) {
      spacingKey = slashMatch[1];
    } else if (dashMatch) {
      spacingKey = dashMatch[1];
    } else if (/^[0-9.]+$/.test(lastPart)) {
      spacingKey = lastPart;
    }

    if (spacingKey && numericSpacingOrder.includes(spacingKey)) {
      spacingValues.set(spacingKey, resolvedValue);
    }
  }

  if (spacingValues.size === 0) {
    return '';
  }

  // Determine if we're using named or numeric spacing
  const hasNamedSpacing = namedSpacingOrder.some(key => spacingValues.has(key));
  const spacingOrder = hasNamedSpacing ? namedSpacingOrder : numericSpacingOrder;

  // Get base spacing value
  let baseSpacing = 4; // default
  if (hasNamedSpacing) {
    // Use 'xs' or 'sm' as base if available
    baseSpacing = spacingValues.get('xs') || spacingValues.get('sm') || 4;
  } else {
    baseSpacing = spacingValues.get('1') || 4;
  }

  // Build CSS
  let css = ':root {\n';
  css += `  --spacing: ${pxToRem(baseSpacing)};\n`;
  css += '}\n';

  css += '\n@theme {\n';

  for (const key of spacingOrder) {
    if (spacingValues.has(key)) {
      const value = spacingValues.get(key);
      css += `  --spacing-${key}: ${pxToRem(value)};\n`;
    }
  }

  css += '}\n';

  return css;
}

// ============================================
// Main Generation Function
// ============================================

async function generateCombinedStylesheet(selectedCollections) {
  const allCollections = await collectVariableData();
  const cssBlocks = [];

  for (const selected of selectedCollections) {
    const collection = allCollections.find(c => c.id === selected.collectionId);
    if (!collection) continue;

    const template = getCollectionTemplate(collection.name);
    if (!template) continue;

    let css = '';

    switch (template) {
      case 'semantic-colors':
        // Pass dark mode ID if available for light/dark pair generation
        css = await generateSemanticColorsCSS(collection, selected.modeId, selected.darkModeId || null);
        break;
      case 'chart-colors':
        // Pass dark mode ID if available for light/dark pair generation
        css = await generateChartColorsCSS(collection, selected.modeId, selected.darkModeId || null);
        break;
      case 'typography':
        css = await generateTypographyCSS(collection, selected.modeId);
        break;
      case 'border-radii':
        css = await generateBorderRadiiCSS(collection, selected.modeId);
        break;
      case 'shadows':
        css = await generateShadowsCSS(collection, selected.modeId);
        break;
      case 'spacing':
        css = await generateSpacingCSS(collection, selected.modeId);
        break;
    }

    if (css) {
      cssBlocks.push(`/* ${collection.name} */\n${css}`);
    }
  }

  return cssBlocks.join('\n');
}

// ============================================
// Plugin Initialization
// ============================================

figma.showUI(__html__, { width: 900, height: 700, themeColors: true });

// Session-level storage for exclusions (resets when plugin closes)
let sessionExclusions = [];

// Patterns for collections that should be excluded by default (uses partial matching)
const EXCLUSION_PATTERNS = [
  'raw color',           // matches "raw colors", "Raw Colors", etc.
  'absolute spacing',    // matches "Absolute Spacing", etc.
  'spacing (absolute)',  // matches "Spacing (Absolute)", etc.
  'spacing absolute',    // matches "Spacing Absolute", etc.
  'absolute border',     // matches "Absolute Border Radii", etc.
  'border radii (absolute)', // matches exact pattern
  'border radius (absolute)',
  '---'                  // separator collections
];

// Check if a collection name matches any exclusion pattern
function shouldExcludeByDefault(collectionName) {
  const name = collectionName.toLowerCase();
  return EXCLUSION_PATTERNS.some(pattern => name.includes(pattern.toLowerCase()));
}

// Load collections and send to UI
collectVariableData().then(async (collections) => {
  figma.ui.postMessage({
    type: 'collections-loaded',
    collections: collections.map(c => ({
      id: c.id,
      name: c.name,
      modes: c.modes
    }))
  });

  // Apply default exclusions for this session
  const defaultExclusions = collections
    .filter(c => shouldExcludeByDefault(c.name))
    .map(c => ({ id: c.id, name: c.name }));

  sessionExclusions = defaultExclusions;

  figma.ui.postMessage({
    type: 'exclusions-loaded',
    exclusions: sessionExclusions
  });
});

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'load-exclusions') {
    figma.ui.postMessage({
      type: 'exclusions-loaded',
      exclusions: sessionExclusions
    });
  }

  if (msg.type === 'save-exclusions') {
    // Store in session memory only (not persisted)
    sessionExclusions = msg.exclusions;
  }

  if (msg.type === 'generate-stylesheet') {
    const { collections: selectedCollections, excludeUnofficialVars } = msg;

    try {
      let stylesheet = await generateCombinedStylesheet(selectedCollections);

      // Filter out unofficial variables if setting is enabled
      if (excludeUnofficialVars) {
        stylesheet = filterUnofficialVariables(stylesheet);
      }

      figma.ui.postMessage({
        type: 'stylesheet-generated',
        stylesheet: stylesheet
      });
    } catch (error) {
      console.error('Error generating stylesheet:', error);
      figma.ui.postMessage({
        type: 'error',
        message: 'Failed to generate stylesheet: ' + error.message
      });
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
