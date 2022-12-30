import { ChipSelectorItem, ChipSelectorOptions } from "./dzs-chip-selector.type";
declare global {
    interface Window {
        dzs_initDzsChipSelector: ($argChip_: HTMLElement, options?: ChipSelectorOptions) => void;
    }
    interface HTMLElement {
        webComponent?: any;
    }
}
export declare class DzsChipSelector {
    /** DOM - main element wrapper */
    $elem_: HTMLElement;
    $inputNewElement_: HTMLInputElement;
    $autoCompleteList: HTMLElement;
    $form: HTMLElement;
    feedSource: string;
    /** single source of truth -- filtered by keyboard */
    autoCompleteOptions: ChipSelectorItem[];
    /** single source of truth */
    persistentOptions: ChipSelectorItem[];
    placeholderNoItemsFound: string;
    /** config options */
    chipSelectorOptions: ChipSelectorOptions;
    inputForm_currentQueryString: string;
    constructor($elem: HTMLElement, chipSelectorOptions: ChipSelectorOptions);
    initClass(): void;
    initStructure(): void;
    reinit(): void;
    readAttrForPersistentOptions(): void;
    getOptionsFromForm($form: HTMLElement): void;
    /**
     init--
     initAfterStructure--
     reinit--
     */
    initAfterStructure(): void;
    onInputAreaFocus(isFocus?: boolean): void;
    static getOptionFromValue(options: any[], dataValue: string): any;
    /**
     * updates from single source of truth this.$autoCompleteList -- .dzs-chip-selector--autocompletelist--items
     */
    updateListFromOptions(): void;
    /**
     * updates the DOM -> FORM from single source of truth this.$autoCompleteList
     */
    updateFormFromOptions(): void;
    /**
     * updates from single source of truth this.$autoCompleteList
     */
    updateChipsFromOptions(): void;
    /**
     * create the list from currentItems
     */
    createListFromOptions(): void;
    getAutocompleteItemDomFromValue(arg: string): void;
    /**
     * filter on each letter
     */
    autoCompleteFilterResults(stringSequence: string): void;
}
export declare function init_chipSelector($argChip_: HTMLElement, options?: ChipSelectorOptions): void;
//# sourceMappingURL=dzs-chip-selector.d.ts.map