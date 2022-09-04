import {
  DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS, DZS_CHIP_SELECTOR_CHIPS_CLOSE,
  DZS_CHIP_SELECTOR_CLASS_NAME
} from "./config/dzs-chip-selector.config";
import {domRemoveChildren, matchSelector} from "./js_common/dzs_helpers";
// import {$es} from '../../deps/esjquery/js/_esjquery';

console.log('ceva2 2 3 4  33 4');

declare global {
  interface Window {
    dzs_initDzsChipSelector: any;
  }
}


// todo: temp
// type esJquery = {
//
//   addClass: (arg:string) => {}
//   find: (arg:string) => esJquery
// };

export class DzsChipSelector {
  $elem_: HTMLElement;
  $inputNewElement_: HTMLInputElement;
  $autoCompleteList: HTMLElement;
  $form: HTMLElement;
  // $elem: esJquery;
  // $inputNewElement: esJquery;


  /** single source of truth */
  currentItems: {
    htmlContent: string,
    value: string,
    currentStatus: string
  }[] = [];


  constructor($elem: HTMLElement) {

    this.$elem_ = $elem;
    if (($elem as any).isDzsChipsInited) {
      return;
    }

    this.initClass()
  }

  initClass() {
    (this.$elem_ as any).isDzsChipsInited = true;

    this.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-inited');

    this.initAfterStructure();
  }

  initAfterStructure() {
    const selfInstance = this;
    selfInstance.$inputNewElement_ = this.$elem_.querySelector('.dzs-chip-selector--input-new-element');
    selfInstance.$autoCompleteList = this.$elem_.querySelector('.dzs-chip-selector--autocompletelist');
    selfInstance.$form = this.$elem_.querySelector('.dzs-chip-selector--form');


    this.$inputNewElement_.addEventListener('focus', handleInputFocus);
    this.$inputNewElement_.addEventListener('blur', handleInputFocus);
    this.$inputNewElement_.addEventListener('keyup', handleInputFocus);
    this.$autoCompleteList.addEventListener('click', handleAutoCompleteList);
    this.$elem_.querySelector('.dzs-chip-selector--chip-list-wrapper').addEventListener('click', handleChipsClick);


    function handleChipsClick(e: Event) {

      if (e.type === 'click') {

        let t = e.target as HTMLElement;
        const target = matchSelector(t, '.' + DZS_CHIP_SELECTOR_CHIPS_CLOSE);

        if (target) {
          const $chip = target.parentNode;
          console.log($chip);
          const dataValue = ($chip as HTMLElement).getAttribute('data-value');

          const targetOption = selfInstance.getOptionFromValue(dataValue);
          targetOption.currentStatus = 'unchecked';

          selfInstance.updateChipsFromOptions();
          selfInstance.updateFormFromOptions();

        }


      }
    }


    function handleAutoCompleteList(e: Event) {

      if (e.type === 'click') {
        console.log('click e.target', e.target);


        const sel = '';
        let t = e.target as HTMLElement;
        const target = matchSelector(t, '.' + DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS);
        console.log('target - ', target);
        const dataValue = target.getAttribute('data-value');
        const targetOption = selfInstance.getOptionFromValue(dataValue);
        if (target.classList.contains('is-selected')) {

          target.classList.remove('is-selected');
          console.log('targetOption - ', targetOption);
          targetOption.currentStatus = 'unchecked';
        } else {

          target.classList.add('is-selected');
          targetOption.currentStatus = 'checked';
        }
        console.log(selfInstance.currentItems);

        selfInstance.updateFormFromOptions();
        selfInstance.updateChipsFromOptions();
        selfInstance.$inputNewElement_.value = '';
        selfInstance.$inputNewElement_.dispatchEvent(new Event('keyup'));
        selfInstance.$inputNewElement_.dispatchEvent(new Event('change'));
      }
    }

    // selfInstance.$inputNewElement.addEventListener()

    function handleInputFocus(e: Event) {
      console.log({selfInstance});
      console.log('this - ', this);


      console.log('event - ', this, e.type);
      const $t = selfInstance.$inputNewElement_;
      if (e.type === 'keyup') {
        console.log('keeeyup', selfInstance.$inputNewElement_.value);
        selfInstance.autoCompleteFilterResults(selfInstance.$inputNewElement_.value);
      }
      if (e.type === 'focus') {
        selfInstance.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-new-element-focused');
      }
      if (e.type === 'blur') {

        selfInstance.$elem_.classList.remove(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-new-element-focused');
      }
    }


    this.reinit();
  }

  getOptionFromValue(dataValue:string){
    const foundItems = this.currentItems.filter((item) => item.value === dataValue);

    return foundItems[0];
  }
  reinit() {
    const selfInstance = this;

    const $form = this.$elem_.querySelector('.dzs-chip-selector--form');
    console.log('$form - ', $form);
    $form.childNodes.forEach(($label: HTMLElement) => {
      if ($label.nodeName.toLowerCase() === 'LABEL'.toLowerCase()) {

        console.log($label, $label.innerHTML);

        const $input = $label.querySelector('input');
        const labelHtml = $label.innerHTML;
        const labelHtmlCurated = labelHtml.replace(/<input.*?>/g, '');

        console.log($input, labelHtmlCurated);

        this.currentItems.push({
          htmlContent: labelHtmlCurated,
          value: $input.value,
          currentStatus: $input.checked ? 'checked' : 'unchecked'
        })
      }
    })
    this.createListFromOptions();
    selfInstance.updateChipsFromOptions();
  }

  updateFormFromOptions() {
    const selfInstance = this;

    domRemoveChildren(selfInstance.$form);


    this.currentItems.forEach(item => {
      selfInstance.$form.insertAdjacentHTML('beforeend', `<label><input type="checkbox" ${item.currentStatus === 'checked' ? 'checked' : ''} name="subject[]" value="${item.value}">${item.htmlContent}</label>`);
    })
  }

  updateChipsFromOptions() {
    const selfInstance = this;

    const $chipsList = selfInstance.$elem_.querySelector('.dzs-chip-selector--chip-list-wrapper');
    domRemoveChildren($chipsList as HTMLElement);


    this.currentItems.forEach(item => {
      if (item.currentStatus === 'checked') {

        $chipsList.insertAdjacentHTML('beforeend', `<li data-value="${item.value}" class="dzs-chip-selector--item">
<div class="dzs-chip-selector--item--content">${item.htmlContent}</div>
<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">
  <figure>x</figure>
</button>
</li>`);

      }
    })
  }

  createListFromOptions() {

    // todo: wrong, find suggestedItems
    const $ulItems = this.$autoCompleteList.querySelector('.dzs-chip-selector--autocompletelist--items');

    domRemoveChildren($ulItems as HTMLElement);
    console.log(this.currentItems);
    this.currentItems.forEach(item => {
      console.log(item);
      $ulItems.insertAdjacentHTML('beforeend', `<li class="dzs-chip-selector--autocompletelist--items--item ${item.currentStatus === 'checked' ? 'is-selected' : ''}" data-value="${item.value}">${item.htmlContent}</li>`);
    })
  }

  autoCompleteFilterResults(arg: string) {
    const $items = this.$autoCompleteList.querySelectorAll('.' + DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS);
    console.log($items);
    arg = arg.toLowerCase();

    $items.forEach(($item) => {
      console.log($item, $item.textContent, arg, ($item.textContent).indexOf(arg));
      if (($item.textContent).toLowerCase().indexOf(arg) > -1) {
        $item.classList.remove('is-hidden');
      } else {

        $item.classList.add('is-hidden');
      }
    })
  }


}

window.dzs_initDzsChipSelector = function ($argChip_: HTMLElement) {
  new DzsChipSelector($argChip_);
}


/**
 * returns the sum
 */
function ceva(arg: number): number {

  return arg;
}