// Create a class for the element
import {ChipSelectorItem, ChipSelectorOptions} from "./dzs-chip-selector.type";
import {DzsChipSelector} from "./dzs-chip-selector";
import styleChipTextContent from './dzs-chip-selector.scss';


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
    this.wrapper.setAttribute('class', 'dzs-chip-selector-wrapper');

    this.wrapper.innerHTML = `<div class="dzs-chip-selector" >
      </div>`;


    // Create some CSS to apply to the shadow dom

    console.log(this);
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



    if(skinCss){
      styleChipInner = document.createElement('style');
      styleChipInner.type = 'text/css';
      styleChipInner.appendChild(skinCss);
    }


    // Attach the created elements to the shadow dom
    this.shadow.appendChild(this.wrapper);
    this.shadow.appendChild(styleChip);
    if(styleChipInner){
      this.shadow.appendChild(styleChipInner);
    }
    if(skinLink){
      (skinLink as HTMLElement).setAttribute('href', String((skinLink as HTMLElement).getAttribute('data-lazy-href')));
      this.shadow.appendChild(skinLink);
    }


  }

  renderComponent() {
    console.log('rendered component');


    const $chipSelector = this.wrapper.querySelector('.dzs-chip-selector');
    ($chipSelector as any).webComponent = this;


    if ($chipSelector) {

      const chipSelectorOptions: ChipSelectorOptions = {};

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
      //     console.log(ar)
      //   }) ;
      // },1000);

      new DzsChipSelector(this.wrapper.querySelector('.dzs-chip-selector') as HTMLElement, chipSelectorOptions);
    }
  }

  /**
   * called on connected
   */
  connectedCallback() {
    console.log('connectedCallback()');
    this.renderComponent();

  }

}

// Define the new element
customElements.define('dzs-chip-selector', DzsChipSelectorWrapper);

/**
 * returns the sum
 */
export function ceva(arg: number): number {

  return arg;
}