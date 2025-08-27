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

/**
 * Web Component wrapper for the DzsChipSelector.
 *
 * This class extends HTMLElement to create a custom HTML element `<dzs-chip-selector>`
 * that encapsulates the chip selector functionality within a Shadow DOM.
 *
 * @description
 * The wrapper provides:
 * - Shadow DOM encapsulation for styling and behavior isolation
 * - Automatic initialization of the chip selector when connected to DOM
 * - Lifecycle management with proper cleanup
 * - Data attribute configuration support
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <dzs-chip-selector></dzs-chip-selector>
 *
 * <!-- With configuration -->
 * <dzs-chip-selector
 *   data-persistent-options='[{"value":"option1","htmlContent":"Option 1","currentStatus":"unchecked"}]'
 *   data-view-skin="default"
 *   data-view-is-wrapping="true">
 * </dzs-chip-selector>
 * ```
 *
 * @extends {HTMLElement}
 * @since 1.0.0
 * @author raduzoom
 */
export class DzsChipSelectorWrapper extends HTMLElement {
  /** Shadow DOM root for encapsulation */
  shadow: ShadowRoot;
  /** Main wrapper element within shadow DOM */
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


  /**
   * Lifecycle callback called when the element is removed from the DOM.
   *
   * This method is automatically called by the browser when the custom element
   * is disconnected from the document. It provides an opportunity for cleanup
   * operations such as removing event listeners, clearing intervals, or
   * cleaning up references.
   *
   * @description
   * Currently logs the removal event. Can be extended to:
   * - Remove global references
   * - Cleanup observers, intervals, or event listeners
   * - Trigger custom events
   * - Perform memory cleanup
   *
   * @example
   * ```javascript
   * // The method is called automatically when element is removed
   * const element = document.querySelector('dzs-chip-selector');
   * element.remove(); // This will trigger disconnectedCallback()
   * ```
   *
   * @since 1.0.0
   */
  disconnectedCallback(): void {
    console.log(`[DzsChipSelectorWrapper] Removed from DOM`, this);
    // You can also do:
    // - Remove global references
    // - Cleanup observers, intervals, or event listeners
    // - Trigger custom events
  }

  /**
   * Renders and initializes the chip selector component.
   *
   * This method sets up the chip selector within the web component's shadow DOM.
   * It configures the component with options from data attributes and initializes
   * the main DzsChipSelector instance.
   *
   * @description
   * The method performs the following operations:
   * 1. Finds the chip selector element within the shadow DOM
   * 2. Sets up the web component reference for communication
   * 3. Retrieves configuration options from data attributes
   * 4. Configures the update callback for selected options
   * 5. Initializes the main DzsChipSelector instance
   *
   * @example
   * ```javascript
   * // This method is called automatically when the component is connected
   * const element = document.createElement('dzs-chip-selector');
   * document.body.appendChild(element); // Triggers renderComponent()
   * ```
   *
   * @since 1.0.0
   * @private
   */
  renderComponent(): void {

    console.log('renderComponent');


    const $chipSelector = this.wrapper.querySelector(`.${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}`);
    ($chipSelector as any).csWebComponent = this;


    if ($chipSelector) {


      const chipSelectorOptions = getChipSelectorOptions(this);

      chipSelectorOptions.onUpdateFunction = (allOptions: ChipSelectorItem[]) => {
        const selectedOptions = allOptions.filter((el: ChipSelectorItem) => el.currentStatus === 'checked');
        console.log(selectedOptions)
      };
      // chipSelectorOptions.viewSkin = 'alceva';

      // setTimeout(()=>{
      //
      //   import('./style/skins/skin-default.scss').then((ar)=>{
      //   }) ;
      // },1000);

      ($chipSelector as any).csWebComponent.chipSelectorMain = new DzsChipSelector(this.wrapper.querySelector(`.${DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL}`) as HTMLElement, chipSelectorOptions);
    }
  }

  /**
   * Lifecycle callback called when the element is connected to the DOM.
   *
   * This method is automatically called by the browser when the custom element
   * is added to the document. It triggers the component rendering and initialization.
   *
   * @description
   * The method:
   * - Calls renderComponent() to set up the chip selector
   * - Ensures the component is properly initialized when added to DOM
   * - Handles the initial setup of the web component
   *
   * @example
   * ```javascript
   * // The method is called automatically when element is added to DOM
   * const element = document.createElement('dzs-chip-selector');
   * document.body.appendChild(element); // This will trigger connectedCallback()
   * ```
   *
   * @since 1.0.0
   */
  connectedCallback(): void {
    this.renderComponent();

  }

}

/**
 * Initializes the DzsChipSelector Web Component functionality.
 *
 * This function registers the custom element `<dzs-chip-selector>` and sets up
 * DOM monitoring for component lifecycle management. It should be called once
 * before using the web component in your application.
 *
 * @description
 * The function performs the following operations:
 * 1. Registers the custom element 'dzs-chip-selector' with the browser
 * 2. Prevents multiple initializations using a global flag
 * 3. Sets up a MutationObserver to monitor component removal from DOM
 * 4. Enables declarative usage of the chip selector as HTML elements
 *
 * @example
 * ```javascript
 * // Import and initialize
 * import { dzsChipSelectorcsWebComponent_init } from 'chip-selector/web-components';
 *
 * // Initialize the web components
 * dzsChipSelectorWebComponent_init();
 *
 * // Now you can use in HTML:
 * // <dzs-chip-selector></dzs-chip-selector>
 * ```
 *
 * @example
 * ```html
 * <!-- After initialization, use as a custom HTML element -->
 * <dzs-chip-selector
 *   data-persistent-options='[{"value":"option1","htmlContent":"Option 1","currentStatus":"unchecked"}]'
 *   data-view-skin="default"
 *   data-view-is-wrapping="true">
 * </dzs-chip-selector>
 * ```
 *
 * @throws {Error} If the custom element is already defined (in strict environments)
 *
 * @since 1.0.0
 * @author raduzoom
 *
 * @returns {void} This function does not return a value
 *
 * @see {@link DzsChipSelectorWrapper} The web component class
 * @see {@link DzsChipSelector} The main chip selector class
 * @see {@link ChipSelectorOptions} Configuration options interface
 */
export function dzsChipSelectorWebComponent_init(): void {

  if (!globalThis.dzs_chipSelector_inited) {
    customElements.define(DZS_CHIP_SELECTOR__CLASS_NAME__PRINCIPAL, DzsChipSelectorWrapper);
    globalThis.dzs_chipSelector_inited = true;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((node) => {
        if (node instanceof HTMLElement && node.tagName.toLowerCase() === 'dzs-chip-selector') {
          console.log('⚠️ Web component removed from DOM:', node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

globalThis.dzsChipSelectorWebComponent_init = dzsChipSelectorWebComponent_init;

/**
 * Utility function for testing purposes.
 *
 * This function simply returns the input argument unchanged.
 * It appears to be a placeholder or testing function.
 *
 * @param {number} arg - The input number to return
 * @returns {number} The same number that was passed in
 *
 * @example
 * ```javascript
 * const result = ceva(42); // Returns 42
 * ```
 *
 * @since 1.0.0
 * @deprecated This function appears to be for testing only
 */
export function ceva(arg: number): number {

  return arg;
}