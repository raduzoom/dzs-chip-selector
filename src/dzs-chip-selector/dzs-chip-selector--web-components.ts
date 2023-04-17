// Create a class for the element
import {ChipSelectorItem} from "./dzs-chip-selector.type";
import {DzsChipSelector} from "./dzs-chip-selector";
import {DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL} from "./dzs-chip-selector.config";
import {appendStyle, getChipSelectorOptions} from "./jsinc/web-component/web-component-view";


declare global {
  interface Window {
    dzs_chipSelector_inited: boolean;
  }
}
declare module globalThis {
  let dzs_chipSelector_inited: boolean;
  let dzsChipSelectorWebComponent_init: () => void;
}
globalThis.dzs_chipSelector_inited = false;

export class DzsChipSelectorWrapper extends HTMLElement {
  shadow: ShadowRoot;
  wrapper: HTMLElement;

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.shadow = this.attachShadow({mode: 'open'});

    // Create spans
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('class', `${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}-wrapper`);

    this.wrapper.innerHTML = `<div class="${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}" >
      </div>`;


    // Attach the created elements to the shadow dom
    this.shadow.appendChild(this.wrapper);

    appendStyle(this);

  }

  renderComponent() {


    const $chipSelector = this.wrapper.querySelector(`.${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}`);
    ($chipSelector as any).webComponent = this;


    if ($chipSelector) {


      const chipSelectorOptions = getChipSelectorOptions(this);

      chipSelectorOptions.onUpdateFunction = (allOptions: ChipSelectorItem[]) => {
        const selectedOptions = allOptions.filter((el: ChipSelectorItem) => el.currentStatus === 'checked');
      };
      // chipSelectorOptions.viewSkin = 'alceva';

      // setTimeout(()=>{
      //
      //   import('./style/skins/skin-default.scss').then((ar)=>{
      //   }) ;
      // },1000);

      new DzsChipSelector(this.wrapper.querySelector(`.${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}`) as HTMLElement, chipSelectorOptions);
    }
  }

  /**
   * called on connected
   */
  connectedCallback() {
    this.renderComponent();

  }

}

export function dzsChipSelectorWebComponent_init() {

  if (!globalThis.dzs_chipSelector_inited) {
    customElements.define(DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL, DzsChipSelectorWrapper);
    globalThis.dzs_chipSelector_inited = true;
  }
}

globalThis.dzsChipSelectorWebComponent_init = dzsChipSelectorWebComponent_init;

/**
 * returns the sum
 */
export function ceva(arg: number): number {

  return arg;
}