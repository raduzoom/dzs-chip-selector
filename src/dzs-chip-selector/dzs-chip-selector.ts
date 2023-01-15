import {
  DZS_CHIP_SELECTOR_CSS_SELECTOR_OVERFLOW_TOOLTIP_CONTENT,
  DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS,
  DZS_CHIP_SELECTOR_CHIPS_SELECTED,
  DZS_CHIP_SELECTOR_CLASS_NAME
} from "./config/dzs-chip-selector.config";
import {domRemoveChildren, getComputedProp, insertHtml} from "./js_common/dzs_helpers";
import {ChipSelectorItem, ChipSelectorOptions, currentStatusType} from "./dzs-chip-selector.type";
import {DZS_CHIP_SELECTOR__CLASS_NAME__IS_PLACEHOLDER_VISIBLE} from "./dzs-chip-selector.config";
import {dzsChipSelectorDefaultOptions} from "./config/dzs-chip-selector--defaultOptions";
import {initChipSelector} from "./jsinc/chipSelectorHelpers";
import {setupHandlers} from "./jsinc/chipSelectorHandlers";
import {chipSelectorInitStructure, viewChipSelectorChipItemStructure} from "./jsinc/chipSelectorViewConstructStructure";
// import {$es} from '../../deps/esjquery/js/_esjquery';


declare global {
  interface Window {
    dzs_initDzsChipSelector: ($argChip_: HTMLElement, options?: ChipSelectorOptions) => void;
  }

  interface HTMLElement {
    webComponent?: any;
  }
}


// todo: temp
// type esJquery = {
//
//   addClass: (arg:string) => {}
//   find: (arg:string) => esJquery
// };

export class DzsChipSelector {
  /** DOM - main element wrapper */
  $elem_!: HTMLElement;
  $inputNewElement_!: HTMLInputElement;
  $autoCompleteList!: HTMLElement;
  $form!: HTMLElement;
  // $elem: esJquery;
  // $inputNewElement: esJquery;

  styleIsSkinSet = false;

  feedSource = 'form';

  /** single source of truth -- filtered by keyboard */
  autoCompleteOptions: ChipSelectorItem[] = [];
  /** single source of truth */
  persistentOptions: ChipSelectorItem[] = [];
  placeholderNoItemsFound!: string;
  /** config options */
  chipSelectorOptions!: ChipSelectorOptions;

  inputForm_currentQueryString = '';


  constructor($elem: HTMLElement, chipSelectorOptions: ChipSelectorOptions, isInitingClass = true) {

    if (!$elem) {
      return;
    }

    this.chipSelectorOptions = Object.assign({...dzsChipSelectorDefaultOptions}, chipSelectorOptions);

    this.$elem_ = $elem;
    ($elem as any).selfInstance = this;
    this.placeholderNoItemsFound = String(this.chipSelectorOptions.placeholderNoItemsFound);
    if (($elem as any).isDzsChipsInited) {
      return;
    }

    if(isInitingClass){
      this.initClass();
    }
  }

  initClass() {

    initChipSelector(this);

    chipSelectorInitStructure(this);
    this.initAfterStructure();
  }

  reinit() {
    const selfInstance = this;

    const $form = this.$elem_.querySelector('.dzs-chip-selector--form') as HTMLElement;

    if ($form) {
      this.feedSource = 'form';
      // @ts-ignore
      this.chipSelectorOptions.persistentOptions = null;
      this.getOptionsFromForm($form);
    } else {
      // -- get from html
      if (this.$elem_.getAttribute('data-persistentOptions')) {
        this.readAttrForPersistentOptions();
      }
    }
    if (this.chipSelectorOptions.persistentOptions) {
      this.feedSource = 'options';
      this.persistentOptions = this.chipSelectorOptions.persistentOptions;
      this.autoCompleteOptions = this.chipSelectorOptions.persistentOptions;
    }
    this.createListFromOptions();
    selfInstance.updateChipsFromOptions();
  }

  readAttrForPersistentOptions() {
    const dataPersistentOptions = this.$elem_.getAttribute('data-persistentOptions');
    this.chipSelectorOptions.persistentOptions = JSON.parse(String(dataPersistentOptions));
  }

  getOptionsFromForm($form: HTMLElement) {

    // -- parse main form
    // @ts-ignore
    $form.childNodes.forEach(($label: HTMLElement) => {
      if ($label.nodeName.toLowerCase() === 'LABEL'.toLowerCase()) {


        const $input = $label.querySelector('input');
        const labelHtml = $label.innerHTML;
        const labelHtmlCurated = labelHtml.replace(/<input.*?>/g, '');


        const newItem: ChipSelectorItem = {
          htmlContent: labelHtmlCurated,
          value: String($input?.value),
          currentStatus: $input?.checked ? currentStatusType.CHECKED : currentStatusType.UNCHECKED
        };

        this.persistentOptions.push(newItem);
        this.autoCompleteOptions.push(newItem);
      }
    })
  }


  /**
   init--
   initAfterStructure--
   reinit--
   */
  initAfterStructure() {
    const selfInstance = this;
    selfInstance.$inputNewElement_ = this.$elem_.querySelector('.dzs-chip-selector--input-new-element') as HTMLInputElement;
    selfInstance.$autoCompleteList = this.$elem_.querySelector('.dzs-chip-selector--autocompletelist') as HTMLInputElement;
    selfInstance.$form = this.$elem_.querySelector('.dzs-chip-selector--form') as HTMLInputElement;

    setupHandlers(this);


    this.reinit();
  }

  onInputAreaFocus(isFocus = true) {

    const autocompleteListX = this.$inputNewElement_.getBoundingClientRect().x - this.$elem_.getBoundingClientRect().x;

    if (isFocus) {
      this.$autoCompleteList.style.left = autocompleteListX + 'px';
      this.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-new-element-focused');
    } else {
      this.$elem_.classList.remove(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-new-element-focused');
    }
  }


  static getOptionFromValue(options: any[], dataValue: string) {

    const foundItems = options.filter((item) => item.value === dataValue);

    return foundItems[0];
  }


  /**
   * updates from single source of truth this.$autoCompleteList -- .dzs-chip-selector--autocompletelist--items
   */
  updateListFromOptions() {

    const $ulItems = this.$autoCompleteList.querySelector('.dzs-chip-selector--autocompletelist--items');


    let minWidthChild = null;
    $ulItems?.childNodes.forEach(child => {

      const dataValue = String((child as HTMLElement).getAttribute('data-value'));
      const persistentOption = DzsChipSelector.getOptionFromValue(this.persistentOptions, dataValue);


      if (persistentOption !== undefined) {
        if (persistentOption.currentStatus === currentStatusType.UNCHECKED) {
          (child as HTMLElement).classList.remove(DZS_CHIP_SELECTOR_CHIPS_SELECTED);
        }
        if (persistentOption.currentStatus === currentStatusType.CHECKED) {
          (child as HTMLElement).classList.add(DZS_CHIP_SELECTOR_CHIPS_SELECTED);
        }
      }


    })

  }

  /**
   * updates the DOM -> FORM from single source of truth this.$autoCompleteList
   */
  updateFormFromOptions() {
    const selfInstance = this;

    if (this.feedSource === 'form') {

      domRemoveChildren(selfInstance.$form);
    }

    if (this.$elem_.webComponent && this.$elem_.webComponent.onUpdate) {
      this.chipSelectorOptions.onUpdateFunction = this.$elem_.webComponent.onUpdate;
    }
    if (this.chipSelectorOptions.onUpdateFunction) {
      this.chipSelectorOptions.onUpdateFunction(this.persistentOptions);
    }


    if (this.feedSource === 'form') {
      this.persistentOptions.forEach(item => {
        insertHtml(selfInstance.$form, `<label><input type="checkbox" ${item.currentStatus === currentStatusType.CHECKED ? currentStatusType.CHECKED : ''} name="subject[]" value="${item.value}">${item.htmlContent}</label>`)
      })
    }
  }

  /**
   * updates from single source of truth this.$autoCompleteList
   */
  updateChipsFromOptions() {
    const selfInstance = this;

    const $chipsList = selfInstance.$elem_.querySelector('.dzs-chip-selector--chip-list-wrapper');
    domRemoveChildren($chipsList as HTMLElement);

    let tooltipContent = '';





    this.persistentOptions.forEach(item => {
      if (item.currentStatus === currentStatusType.CHECKED) {
        insertHtml($chipsList as HTMLElement, viewChipSelectorChipItemStructure(item));

        if (!selfInstance.chipSelectorOptions.viewIsWrapping) {
          if (tooltipContent) {
            tooltipContent += ', ';
          }

          tooltipContent += item.htmlContent;
        }
      }
    })

    if (!selfInstance.chipSelectorOptions.viewIsWrapping) {
      this.viewCheckIfNeedsWrapping(this);
      selfInstance.$elem_.querySelector('.' + DZS_CHIP_SELECTOR_CSS_SELECTOR_OVERFLOW_TOOLTIP_CONTENT)!.innerHTML = tooltipContent;
    }

  }

  viewCheckIfNeedsWrapping(selfInstance: DzsChipSelector){
    let isOverflowing = false;
    let overflowPlaceholderWidth = 0;
    const minAutocompleteInputWidth = getComputedProp(selfInstance.$elem_.querySelector('.dzs-chip-selector--input-new-element--label') as HTMLElement, 'min-width', true) as number;
    const containerWidth = getComputedProp(selfInstance.$elem_.querySelector('.dzs-chip-selector--container') as HTMLElement, 'width', true) as number;
    let totalChipsWidth = 0;


    if (!selfInstance.chipSelectorOptions.viewIsWrapping) {
      overflowPlaceholderWidth = Number(getComputedProp(selfInstance.$elem_.querySelector('.dzs-chip-selector--overflow-placeholder') as HTMLElement, 'width', true)) + Number(getComputedProp(selfInstance.$elem_.querySelector('.dzs-chip-selector--overflow-placeholder') as HTMLElement, 'margin-left', true));
    }

    const $chipsList = selfInstance.$elem_.querySelector('.dzs-chip-selector--chip-list-wrapper');
    $chipsList!.childNodes.forEach(($chip:ChildNode)=>{
      const $lastChip = $chip as HTMLElement;
      $lastChip.style.display = '';
      totalChipsWidth += getComputedProp($lastChip as HTMLElement, 'width', true) as number + 3;
      if (totalChipsWidth > containerWidth - minAutocompleteInputWidth - overflowPlaceholderWidth) {
        $lastChip.style.display = 'none';
        isOverflowing = true;
      }else{
        $lastChip.style.display = '';
      }
    })

    if (isOverflowing) {
      selfInstance.$elem_.classList.add('dzs-chip-selector--is-overflowing');
    } else {

      selfInstance.$elem_.classList.remove('dzs-chip-selector--is-overflowing');
    }
  }

  /**
   * create the list from currentItems
   */
  createListFromOptions() {

    // todo: wrong, find suggestedItems
    const $ulItems = this.$autoCompleteList.querySelector('.dzs-chip-selector--autocompletelist--items');

    domRemoveChildren($ulItems as HTMLElement);
    this.autoCompleteOptions.forEach(item => {
      insertHtml($ulItems as HTMLElement, `<li class="dzs-chip-selector--autocompletelist--items--item ${item.currentStatus === currentStatusType.CHECKED ? DZS_CHIP_SELECTOR_CHIPS_SELECTED : ''}" data-value="${item.value}">${item.htmlContent}</li>`);
    })
  }

  getAutocompleteItemDomFromValue(arg: string) {
    const $items = this.$autoCompleteList.querySelectorAll('.' + DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS);
    $items.forEach(($item) => {
      if ($item.getAttribute('data-value') === arg) {
        return $item;
      }
    })
  }

  /**
   * filter on each letter
   */
  autoCompleteFilterResults(stringSequence: string) {


    if (stringSequence != this.inputForm_currentQueryString) {
      return;
    }

    if (this.chipSelectorOptions.middlewareFilterResults) {
      (this.chipSelectorOptions.middlewareFilterResults(this, stringSequence) as Promise<any>).then(() => {

        filterResultsFrontend(this);
      }).catch((err) => {
        console.log('error - ', err);
      });
    } else {
      filterResultsFrontend(this);
    }


    function filterResultsFrontend(selfInstance: DzsChipSelector) {

      selfInstance.autoCompleteOptions.forEach((autocompleteOption) => {
      })

      const $autoCompleteListItems = selfInstance.$autoCompleteList.querySelectorAll('.' + DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS);
      stringSequence = stringSequence.toLowerCase();

      let nrResultsFound = 0;
      $autoCompleteListItems.forEach(($autoCompleteListItem) => {
        if (selfInstance.inputForm_currentQueryString === '' || ($autoCompleteListItem.textContent || '').toLowerCase().indexOf(stringSequence) > -1) {
          $autoCompleteListItem.classList.remove('is-hidden');
          nrResultsFound++;
        } else {
          $autoCompleteListItem.classList.add('is-hidden');
        }
      })

      if (nrResultsFound === 0) {
        selfInstance.$autoCompleteList.classList.add(DZS_CHIP_SELECTOR__CLASS_NAME__IS_PLACEHOLDER_VISIBLE);
      } else {
        selfInstance.$autoCompleteList.classList.remove(DZS_CHIP_SELECTOR__CLASS_NAME__IS_PLACEHOLDER_VISIBLE);
      }
    }
  }
}

function getWindow() {
  return window || globalThis as any;
}

export function init_chipSelector($argChip_: HTMLElement, options: ChipSelectorOptions = {}) {
  new DzsChipSelector($argChip_, options);

}

getWindow().dzs_initDzsChipSelector = init_chipSelector;

