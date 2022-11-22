
export type ChipSelectorOptions = {
  placeholderNoItemsFound?: string,
  middlewareFilterResults?: any,
  onUpdateFunction?: (...args: any[]) => any;
  persistentOptions?: ChipSelectorItem[]
};


export type ChipSelectorItem = {
  htmlContent: string,
  value: string,
  currentStatus: string
};

