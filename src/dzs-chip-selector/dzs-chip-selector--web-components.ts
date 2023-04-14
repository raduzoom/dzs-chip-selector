// Create a class for the element
import {ChipSelectorItem, ChipSelectorOptions} from "./dzs-chip-selector.type";
import {DzsChipSelector} from "./dzs-chip-selector";
import styleChipTextContent from './dzs-chip-selector.scss';
import {DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL} from "./dzs-chip-selector.config";


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


    // Create some CSS to apply to the shadow dom

    let skinCss = null;
    let skinLink: HTMLElement | null = null;
    let styleChipInner = null;

    this.childNodes.forEach((el) => {
      if ((el as any).tagName === 'STYLE') {
        skinCss = el;
      }
      if ((el as any).tagName === 'LINK') {
        skinLink = el as HTMLElement;
      }
    });

    const styleChip = document.createElement('style');
    styleChip.type = 'text/css';
    styleChip.appendChild(document.createTextNode(styleChipTextContent));


    if (skinCss) {
      styleChipInner = document.createElement('style');
      styleChipInner.type = 'text/css';
      styleChipInner.appendChild(skinCss);
    }


    // Attach the created elements to the shadow dom
    this.shadow.appendChild(this.wrapper);
    this.shadow.appendChild(styleChip);
    if (styleChipInner) {
      this.shadow.appendChild(styleChipInner);
    }
    if (skinLink) {
      (skinLink as HTMLElement).setAttribute('href', String((skinLink as HTMLElement).getAttribute('data-lazy-href')));
      this.shadow.appendChild(skinLink);
    }


  }

  renderComponent() {


    const $chipSelector = this.wrapper.querySelector(`.${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}`);
    ($chipSelector as any).webComponent = this;


    if ($chipSelector) {

      let chipSelectorOptions: ChipSelectorOptions = {};



      if(this.getAttribute('data-chip-selector-options')){

        try{
          const dataChipSelectorOptions = this.getAttribute('data-chip-selector-options');
          chipSelectorOptions = JSON.parse(String(dataChipSelectorOptions));
        }catch (e){
          console.log('cannot parse', e);
        }
      }
      const dataPersistentOptions = this.getAttribute('data-persistentOptions');
      chipSelectorOptions.persistentOptions = JSON.parse(String(dataPersistentOptions));



      chipSelectorOptions.onUpdateFunction = (allOptions: ChipSelectorItem[]) => {
        const selectedOptions = allOptions.filter((el: ChipSelectorItem) => el.currentStatus === 'checked');
        console.log({selectedOptions});
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