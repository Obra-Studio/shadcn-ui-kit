
<!-- code.js -->
// Handle direct commands
if (figma.command === 'post-propstar-treatment') {
  handlePostPropstarTreatment(true);
  figma.closePlugin();
} else if (figma.command === 'prop-star-cleanup') {
  handlePropStarCleanup(true);
  figma.closePlugin();
} else if (figma.command === 'reset-component-set-style') {
  handleResetComponentSetStyle(true);
  figma.closePlugin();
} else {
  // Default: show UI if no specific command
  figma.showUI(__html__, { width: 280, height: 240 });
}

// Handle messages from the UI
figma.ui.onmessage = msg => {

 if (msg.type === 'post-propstar-treatment') {
    handlePostPropstarTreatment();
  } else if (msg.type === 'prop-star-cleanup') {
    handlePropStarCleanup();
  } else if (msg.type === 'reset-component-set-style') {
    handleResetComponentSetStyle();
  }
};

function handleRenameLayer(newName) {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'status',
      message: 'Please select a layer to rename',
      success: false
    });
    return;
  }

  let renamedCount = 0;

  selection.forEach(node => {
    node.name = newName;
    renamedCount++;
  });

  const layerText = renamedCount === 1 ? 'layer' : 'layers';
  figma.ui.postMessage({
    type: 'status',
    message: `Renamed ${renamedCount} ${layerText} to "${newName}"`,
    success: true
  });
}

function handleSetSpacing(spacing) {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'status',
      message: 'Please select a layer to set spacing',
      success: false
    });
    return;
  }

  let updatedCount = 0;

  selection.forEach(node => {
    // Check if the node supports auto layout (frames, components, instances)
    if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'COMPONENT_SET') {
      // Check if auto layout is enabled
      if (node.layoutMode !== 'NONE') {
        // Set padding for auto layout nodes
        node.paddingTop = spacing;
        node.paddingRight = spacing;
        node.paddingBottom = spacing;
        node.paddingLeft = spacing;

        // Set item spacing (gap between children)
        if (spacing === 64) {
          node.itemSpacing = 32;
        } else if (spacing === 0) {
          node.itemSpacing = 0;
        }

        updatedCount++;
      } else {
        // If auto layout is not enabled, we can't set spacing directly
        // Could optionally enable auto layout here, but that might change the design significantly
        figma.ui.postMessage({
          type: 'status',
          message: `"${node.name}" doesn't have auto layout enabled. Enable auto layout to set spacing.`,
          success: false
        });
        return;
      }
    } else {
      figma.ui.postMessage({
        type: 'status',
        message: `"${node.name}" doesn't support spacing. Select frames, components, or instances with auto layout.`,
        success: false
      });
      return;
    }
  });

  if (updatedCount > 0) {
    const layerText = updatedCount === 1 ? 'layer' : 'layers';
    let message = `Set ${spacing}px spacing on ${updatedCount} ${layerText}`;

    // Add gap information for both spacing options
    if (spacing === 64) {
      message += ' and 32px gap';
    } else if (spacing === 0) {
      message += ' and 0px gap';
    }

    figma.ui.postMessage({
      type: 'status',
      message: message,
      success: true
    });
  }
}

function handlePostPropstarTreatment(isDirectCommand = false) {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: 'Please select a component to apply Post-Prop Star treatment',
        success: false
      });
    } else {
      figma.notify('Please select a component to apply Post-Prop Star treatment');
    }
    return;
  }

  let treatedCount = 0;

  selection.forEach(component => {
    if (component.type !== 'COMPONENT' && component.type !== 'COMPONENT_SET') {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: `Selected node type: ${component.type}. Please select components or component sets only`,
          success: false
        });
      } else {
        figma.notify(`Selected node type: ${component.type}. Please select components or component sets only`);
      }
      return;
    }

    const parent = component.parent;
    if (!parent || parent.type === 'PAGE') {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: 'Component must have a parent frame',
          success: false
        });
      } else {
        figma.notify('Component must have a parent frame');
      }
      return;
    }

    // Find sibling frame with empty name (Prop Star documentation frame)
    const siblings = parent.children;
    const componentIndex = siblings.indexOf(component);
    
    // Look for empty frame that's a sibling, typically the previous one
    let docFrame = null;
    
    // First check the previous sibling (most common case)
    if (componentIndex > 0) {
      const prevSibling = siblings[componentIndex - 1];
      if (prevSibling.type === 'FRAME' && (prevSibling.name === '' || prevSibling.name === ' ')) {
        docFrame = prevSibling;
      }
    }
    
    // If not found, search all siblings for an empty frame
    if (!docFrame) {
      docFrame = siblings.find(sibling => 
        sibling !== component && 
        sibling.type === 'FRAME' && 
        (sibling.name === '' || sibling.name === ' ')
      );
    }

    if (!docFrame) {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: `No empty documentation frame found for "${component.name}"`,
          success: false
        });
      } else {
        figma.notify(`No empty documentation frame found for "${component.name}"`);
      }
      return;
    }

    // 1. Give the documentation frame the component's name
    docFrame.name = component.name;

    // 2. Unlock the documentation frame
    docFrame.locked = false;

    // 3. Find the "Instances" frame to get its position
    const instancesFrame = docFrame.children.find(child => child.name === 'Instances');
    let targetX = 0;
    let targetY = 0;
    
    if (instancesFrame) {
      targetX = instancesFrame.x;
      targetY = instancesFrame.y;
    }
    
    // 4. Move component inside documentation frame
    docFrame.appendChild(component);
    
    // 5. Position component at the same x/y position as the Instances frame
    component.x = targetX;
    component.y = targetY;

    treatedCount++;
  });

  if (treatedCount > 0) {
    const componentText = treatedCount === 1 ? 'component' : 'components';
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: `Applied Post-Prop Star treatment to ${treatedCount} ${componentText}`,
        success: true
      });
    } else {
      figma.notify(`Applied Post-Prop Star treatment to ${treatedCount} ${componentText}`);
    }
  }
}

function handlePropStarCleanup(isDirectCommand = false) {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: 'Please select a frame to clean up Prop Star elements',
        success: false
      });
    } else {
      figma.notify('Please select a frame to clean up Prop Star elements');
    }
    return;
  }

  let cleanedCount = 0;
  const componentsToSelect = [];
  const framesToProcess = [];

  selection.forEach(node => {
    if (node.type === 'FRAME') {
      // Direct frame selection - use as-is
      framesToProcess.push(node);
    } else if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      // Component selected - find its parent frame
      const parent = node.parent;
      if (parent && parent.type === 'FRAME') {
        // Check if parent contains Prop Star elements
        const hasLabels = parent.children.some(child => 
          child.type === 'GROUP' && child.name.toLowerCase() === 'labels'
        );
        const hasInstances = parent.children.some(child => 
          child.type === 'FRAME' && child.name.toLowerCase() === 'instances'
        );
        
        if (hasLabels || hasInstances) {
          framesToProcess.push(parent);
        } else {
          if (!isDirectCommand) {
            figma.ui.postMessage({
              type: 'status',
              message: `No Prop Star elements found in parent frame of "${node.name}"`,
              success: false
            });
          } else {
            figma.notify(`No Prop Star elements found in parent frame of "${node.name}"`);
          }
          return;
        }
      } else {
        if (!isDirectCommand) {
          figma.ui.postMessage({
            type: 'status',
            message: `"${node.name}" must have a parent frame with Prop Star elements`,
            success: false
          });
        } else {
          figma.notify(`"${node.name}" must have a parent frame with Prop Star elements`);
        }
        return;
      }
    } else {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: 'Please select frames or components to clean up Prop Star elements',
          success: false
        });
      } else {
        figma.notify('Please select frames or components to clean up Prop Star elements');
      }
      return;
    }
  });

  framesToProcess.forEach(node => {

    const children = [...node.children];
    let labelsFound = false;
    let instancesFound = false;
    let component = null;
    
    // Find and remove Labels group and Instances frame, identify the component
    children.forEach(child => {
      if (child.type === 'GROUP' && child.name.toLowerCase() === 'labels') {
        child.remove();
        labelsFound = true;
      } else if (child.type === 'FRAME' && child.name.toLowerCase() === 'instances') {
        child.remove();
        instancesFound = true;
      } else if (child.type === 'COMPONENT' || child.type === 'COMPONENT_SET') {
        component = child;
      }
    });

    if (!labelsFound && !instancesFound) {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: `No Prop Star elements found in "${node.name}"`,
          success: false
        });
      } else {
        figma.notify(`No Prop Star elements found in "${node.name}"`);
      }
      return;
    }

    // If we found a component, ungroup the frame but preserve the component
    if (component) {
      const parent = node.parent;
      const nodeIndex = parent.children.indexOf(node);
      const nodeX = node.x;
      const nodeY = node.y;
      
      // Move component to parent at frame's position
      parent.insertChild(nodeIndex, component);
      component.x = nodeX;
      component.y = nodeY;
      
      // Add component to selection list
      componentsToSelect.push(component);
      
      // Remove the now-empty frame
      node.remove();
    }

    cleanedCount++;
  });

  // Update selection to the extracted components
  if (componentsToSelect.length > 0) {
    figma.currentPage.selection = componentsToSelect;
  }

  if (cleanedCount > 0) {
    const frameText = cleanedCount === 1 ? 'frame' : 'frames';
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: `De-Propstarred ${cleanedCount} ${frameText}`,
        success: true
      });
    } else {
      figma.notify(`De-Propstarred ${cleanedCount} ${frameText}`);
    }
  }
}

function handleResetComponentSetStyle(isDirectCommand = false) {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: 'Please select a component set to reset its style',
        success: false
      });
    } else {
      figma.notify('Please select a component set to reset its style');
    }
    return;
  }

  let resetCount = 0;

  selection.forEach(node => {
    if (node.type === 'COMPONENT_SET') {
      // Remove fills (transparent background)
      node.fills = [];
      
      // Reset stroke to default component set style: #9747FF, inside, 1px, dashed 10-5
      node.strokes = [{
        type: 'SOLID',
        color: { r: 0.592, g: 0.278, b: 1 } // #9747FF
      }];
      node.strokeWeight = 1;
      node.strokeAlign = 'INSIDE';
      node.dashPattern = [10, 5]; // 10px dash, 5px gap
      
      // Reset corner radius to 5px
      node.cornerRadius = 5;
      
      resetCount++;
    } else {
      if (!isDirectCommand) {
        figma.ui.postMessage({
          type: 'status',
          message: `"${node.name}" is not a component set`,
          success: false
        });
      } else {
        figma.notify(`"${node.name}" is not a component set`);
      }
      return;
    }
  });

  if (resetCount > 0) {
    const setText = resetCount === 1 ? 'component set' : 'component sets';
    if (!isDirectCommand) {
      figma.ui.postMessage({
        type: 'status',
        message: `Reset default component set style on ${resetCount} ${setText}`,
        success: true
      });
    } else {
      figma.notify(`Reset default component set style on ${resetCount} ${setText}`);
    }
  }
}
