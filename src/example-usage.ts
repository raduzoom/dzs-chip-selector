// Example usage of the exported onUpdate function from DzsChipSelector
import { DzsChipSelector, ChipSelectorOptions, ChipSelectorItem } from './dzs-chip-selector/dzs-chip-selector';

// Example 1: Basic usage with onUpdate callback
const options: ChipSelectorOptions = {
  onUpdateFunction: (persistentOptions: ChipSelectorItem[]) => {
    console.log('Chip selector updated:', persistentOptions);
    // Handle the update - e.g., save to backend, update UI, etc.
  },
  persistentOptions: [
    { htmlContent: 'Apple', value: 'apple', currentStatus: 'unchecked' },
    { htmlContent: 'Orange', value: 'orange', currentStatus: 'checked' },
    { htmlContent: 'Banana', value: 'banana', currentStatus: 'unchecked' }
  ]
};

// Create chip selector instance
const chipSelectorElement = document.querySelector('#my-chip-selector') as HTMLElement;
const chipSelector = new DzsChipSelector(chipSelectorElement, options);

// Example 2: Manually trigger onUpdate from external code
function triggerUpdate() {
  // You can now call the onUpdate method directly
  chipSelector.onUpdate();
}

// Example 3: Access current state and trigger updates
function handleExternalChange() {
  // Get current options
  const currentOptions = chipSelector.persistentOptions;
  console.log('Current options:', currentOptions);
  
  // Trigger update manually
  chipSelector.onUpdate();
}

// Example 4: Using with web components
// The onUpdate method is also available when using the web component version
// You can access it through the element's selfInstance property
const webComponentElement = document.querySelector('dzs-chip-selector') as any;
if (webComponentElement && webComponentElement.selfInstance) {
  const webComponentInstance = webComponentElement.selfInstance as DzsChipSelector;
  
  // Call onUpdate on the web component instance
  webComponentInstance.onUpdate();
}

// Example 5: TypeScript interface usage
// You can also use the interface for type safety
import { IDzsChipSelector } from './dzs-chip-selector/dzs-chip-selector';

function processChipSelector(selector: IDzsChipSelector) {
  // This ensures type safety - only methods defined in the interface are available
  selector.onUpdate();
  
  // Access readonly properties
  const options = selector.persistentOptions;
  const config = selector.chipSelectorOptions;
}
