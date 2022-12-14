import {
  DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS,
  DZS_CHIP_SELECTOR_CHIPS_CLOSE,
  DZS_CHIP_SELECTOR_CHIPS_SELECTED,
  DZS_CHIP_SELECTOR_CLASS_NAME
} from "./config/dzs-chip-selector.config";
import {domRemoveChildren, insertHtml, matchSelector} from "./js_common/dzs_helpers";
import {ChipSelectorItem, ChipSelectorOptions, currentStatusType} from "./dzs-chip-selector.type";
import {DZS_CHIP_SELECTOR__CLASS_NAME__IS_PLACEHOLDER_VISIBLE} from "./dzs-chip-selector.config";
import {dzsChipSelectorDefaultOptions} from "./config/dzs-chip-selector--defaultOptions";
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

  feedSource = 'form';

  /** single source of truth -- filtered by keyboard */
  autoCompleteOptions: ChipSelectorItem[] = [];
  /** single source of truth */
  persistentOptions: ChipSelectorItem[] = [];
  placeholderNoItemsFound!: string;
  /** config options */
  chipSelectorOptions!: ChipSelectorOptions;

  inputForm_currentQueryString = '';


  constructor($elem: HTMLElement, chipSelectorOptions: ChipSelectorOptions) {

    if (!$elem) {
      return;
    }

    this.chipSelectorOptions = Object.assign(dzsChipSelectorDefaultOptions, chipSelectorOptions);

    this.$elem_ = $elem;
    ($elem as any).selfInstance = this;
    this.placeholderNoItemsFound = String(this.chipSelectorOptions.placeholderNoItemsFound);
    if (($elem as any).isDzsChipsInited) {
      return;
    }

    this.initClass()
  }

  initClass() {
    (this.$elem_ as any).isDzsChipsInited = true;

    this.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-inited');
    this.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + `--skin-${this.chipSelectorOptions.viewSkin}`);

    this.initStructure();
    this.initAfterStructure();
  }

  initStructure() {

    if (!this.$elem_.querySelector('.dzs-chip-selector--container')) {

      insertHtml(this.$elem_, `<div class="dzs-chip-selector--container">
          <div class="dzs-chip-selector--form-field">
            <div class="dzs-chip-selector--chip-list">
              <ul class="dzs-chip-selector--chip-list-wrapper">

              </ul>
            </div>
            <label class="dzs-chip-selector--input-new-element--label">
              <input placeholder="New fruit..." class="dzs-chip-selector--input-new-element"
                     autocomplete="off"
                     role="combobox" aria-autocomplete="list" aria-expanded="false"
                     aria-haspopup="listbox"
                     aria-owns="mat-autocomplete-1">
            </label>
          </div>
        </div>`)

    }

    if (!this.$elem_.querySelector('.dzs-chip-selector--autocompletelist')) {

      insertHtml(this.$elem_, `<div class="dzs-chip-selector--autocompletelist">
          <div class="dzs-chip-selector--autocompletelist--inner">
            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>
            <ul class="dzs-chip-selector--autocompletelist--items">
            </ul>
          </div>
        </div>`)

    }
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


    this.$inputNewElement_.addEventListener('focus', handleInputEvent);
    this.$inputNewElement_.addEventListener('blur', handleInputEvent);
    this.$inputNewElement_.addEventListener('keyup', handleInputEvent);
    this.$autoCompleteList.addEventListener('click', handleAutoCompleteList);
    this.$elem_?.querySelector('.dzs-chip-selector--chip-list-wrapper')?.addEventListener('click', handleChipsClick);


    /**
     * clicks on a chip
     */
    function handleChipsClick(e: Event) {

      if (e.type === 'click') {
        let t = e.target as HTMLElement;
        const target = matchSelector(t, '.' + DZS_CHIP_SELECTOR_CHIPS_CLOSE);

        if (target) {
          const $chip = target.parentNode;
          const dataValue = String(($chip as HTMLElement).getAttribute('data-value'));

          const targetOption = DzsChipSelector.getOptionFromValue(selfInstance.autoCompleteOptions, (dataValue));
          const persistentOption = DzsChipSelector.getOptionFromValue(selfInstance.persistentOptions, (dataValue));
          targetOption.currentStatus = currentStatusType.UNCHECKED;
          persistentOption.currentStatus = currentStatusType.UNCHECKED;

          selfInstance.updateListFromOptions();
          selfInstance.updateChipsFromOptions();
          selfInstance.updateFormFromOptions();
        }


      }
    }


    /**
     * clicks on list
     */
    function handleAutoCompleteList(e: Event) {

      if (e.type === 'click') {


        const sel = '';
        let t = e.target as HTMLElement;
        const $target = matchSelector(t, '.' + DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS);
        let persistentOptionIndex: number | null = null;
        const dataValue = String($target?.getAttribute('data-value'));
        const targetOption = DzsChipSelector.getOptionFromValue(selfInstance.autoCompleteOptions, dataValue);
        let persistentOption = DzsChipSelector.getOptionFromValue(selfInstance.persistentOptions, dataValue);

        if (persistentOption === undefined) {

          persistentOption = {
            "htmlContent": $target?.innerHTML,
            "value": $target?.getAttribute('data-value'),
            "currentStatus": currentStatusType.UNCHECKED
          }

          selfInstance.persistentOptions.push(persistentOption);
        }

        if ($target?.classList.contains(DZS_CHIP_SELECTOR_CHIPS_SELECTED)) {
          targetOption.currentStatus = currentStatusType.UNCHECKED;
          persistentOption.currentStatus = currentStatusType.UNCHECKED;
        } else {
          // -- turn to checked
          persistentOptionIndex = selfInstance.persistentOptions.findIndex(el => el.value === persistentOption.value);
          // -- move to end of array
          if (persistentOptionIndex < selfInstance.persistentOptions.length - 1) {
            selfInstance.persistentOptions.push(selfInstance.persistentOptions.splice(persistentOptionIndex, 1)[0]);
          }
          targetOption.currentStatus = currentStatusType.CHECKED;
          persistentOption.currentStatus = currentStatusType.CHECKED;
        }

        selfInstance.updateListFromOptions();
        selfInstance.updateFormFromOptions();
        selfInstance.updateChipsFromOptions();
        selfInstance.$inputNewElement_.value = '';
        selfInstance.$inputNewElement_.dispatchEvent(new Event('keyup'));
        selfInstance.$inputNewElement_.dispatchEvent(new Event('change'));
      }
    }

    // selfInstance.$inputNewElement.addEventListener()

    function handleInputEvent(e: Event) {
      const $t = selfInstance.$inputNewElement_;
      if (e.type === 'keyup') {
        if (selfInstance.inputForm_currentQueryString === $t.value) {
          return;
        }
        selfInstance.inputForm_currentQueryString = $t.value;
        selfInstance.autoCompleteFilterResults(selfInstance.inputForm_currentQueryString);
      }
      if (e.type === 'focus') {
        selfInstance.onInputAreaFocus();
      }
      if (e.type === 'blur') {

        selfInstance.onInputAreaFocus(false);
      }
    }


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


    this.persistentOptions.forEach(item => {
      if (item.currentStatus === currentStatusType.CHECKED) {
        insertHtml($chipsList as HTMLElement, `<li data-value="${item.value}" class="dzs-chip-selector--item">
<div class="dzs-chip-selector--item--content">${item.htmlContent}</div>
<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">
  <figure>x</figure>
</button>
</li>`)

      }
    })
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
        console.log('error - ');
        console.log(err)
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

