export declare type ChipSelectorOptions = {
    placeholderNoItemsFound?: string;
    middlewareFilterResults?: any;
    viewSkin?: string;
    onUpdateFunction?: (...args: any[]) => any;
    persistentOptions?: ChipSelectorItem[];
};
export declare type ChipSelectorItem = {
    htmlContent: string;
    value: string;
    currentStatus: string;
};
export declare enum currentStatusType {
    CHECKED = "checked",
    UNCHECKED = "unchecked"
}
//# sourceMappingURL=dzs-chip-selector.type.d.ts.map