
export type ChipSelectorOptions = {
  /** text for no items found */
  placeholderNoItemsFound?: string,
  /** include a middleware function like filtering the results */
  middlewareFilterResults?: any,
  /** the skin can be "skin-default", "skin-flat" - also needs css file being loaded */
  viewSkin?: string,
  /** the placeholder for Filter Results ... text */
  inputPlaceholderText?: string,
  /** custom function for onUpdate */
  onUpdateFunction?: (...args: any[]) => any;
  /** wrap false or true */
  viewIsWrapping?: boolean,
  /** the persistent options */
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