
// Create a class for the element
import {ChipSelectorItem, ChipSelectorOptions} from "./dzs-chip-selector.type";
import {DzsChipSelector} from "./dzs-chip-selector";
import styleChipTextContent from './dzs-chip-selector.scss';



class DzsChipSelectorWrapper extends HTMLElement {
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

    this.wrapper.innerHTML = `<div class="dzs-chip-selector dzs-chip-selector--skin-default" >
      </div>`;


    // Create some CSS to apply to the shadow dom


    const styleChip= document.createElement('style');
    styleChip.type = 'text/css';
    styleChip.appendChild(document.createTextNode(styleChipTextContent));


    // Attach the created elements to the shadow dom
    this.shadow.appendChild(this.wrapper);
    this.shadow.appendChild(styleChip);


  }

  renderComponent(){
    console.log('rendered component');


    const $chipSelector = this.wrapper.querySelector('.dzs-chip-selector');
    ($chipSelector as any).webComponent = this;


    if($chipSelector){

      const chipSelectorOptions:ChipSelectorOptions = {};

      const dataPersistentOptions = this.getAttribute('data-persistentOptions');
      chipSelectorOptions.persistentOptions = JSON.parse(dataPersistentOptions);
      chipSelectorOptions.onUpdateFunction = (allOptions:ChipSelectorItem[])=>{

        const selectedOptions = allOptions.filter((el:ChipSelectorItem)=>el.currentStatus==='checked');
        console.log({selectedOptions});
      };

      new DzsChipSelector(this.wrapper.querySelector('.dzs-chip-selector'), chipSelectorOptions);
    }
  }
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
function ceva(arg: number): number {

  return arg;
}