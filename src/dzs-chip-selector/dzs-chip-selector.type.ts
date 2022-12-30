
export type ChipSelectorOptions = {
  placeholderNoItemsFound?: string,
  middlewareFilterResults?: any,
  viewSkin?: string,
  onUpdateFunction?: (...args: any[]) => any;
  persistentOptions?: ChipSelectorItem[]
};


export type ChipSelectorItem = {
  htmlContent: string,
  value: string,
  currentStatus: string
};

export enum currentStatusType {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}