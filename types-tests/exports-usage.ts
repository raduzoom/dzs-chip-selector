// Type-only usage test for the published exports
// This file should compile with `tsc --noEmit` using the project tsconfig

import { DzsChipSelector, currentStatusType } from 'chip-selector';
import type { ChipSelectorOptions, ChipSelectorItem, IDzsChipSelector } from 'chip-selector';
import type { dzsChipSelectorWebComponent_init } from 'chip-selector/web-components';

// Ensure option type is usable
const options: ChipSelectorOptions = {
  placeholderNoItemsFound: 'No items',
  viewSkin: 'skin-default',
  viewIsWrapping: true,
  persistentOptions: [
    { htmlContent: 'One', value: '1', currentStatus: currentStatusType.UNCHECKED },
    { htmlContent: 'Two', value: '2', currentStatus: currentStatusType.CHECKED },
  ],
  onUpdateFunction: (opts: ChipSelectorItem[]) => {
    // type check only
    return opts.length;
  },
};

// Pretend we have a host element and can construct the class type
declare const hostEl: HTMLElement;

// Validate constructor and interface shape via type positions
const instance: IDzsChipSelector = new DzsChipSelector(hostEl, options);

// Web components API should be importable and callable
const initFn: typeof dzsChipSelectorWebComponent_init | undefined = undefined;
void initFn;

void instance;

