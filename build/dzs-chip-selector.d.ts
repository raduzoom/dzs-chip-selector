declare module "src/dzs-chip-selector/config/dzs-chip-selector.config" {
    /**
     * the default class name
     */
    export const DZS_CHIP_SELECTOR_CLASS_NAME = "dzs-chip-selector";
}
declare module "src/dzs-chip-selector/dzs-chip-selector" {
    global {
        interface Window {
            dzs_initDzsChipSelector: any;
        }
    }
    export class DzsChipSelector {
        $elem_: HTMLElement;
        $inputNewElement_: HTMLElement;
        constructor($elem: HTMLElement);
        initClass(): void;
        initAfterStructure(): void;
    }
}
