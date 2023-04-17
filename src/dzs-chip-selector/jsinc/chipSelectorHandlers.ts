import {matchSelector} from "../js_common/dzs_helpers";
import {
  DZS_CHIP_SELECTOR_AUTOCOMPLETE_CLASS_NAME_ITEMS,
  DZS_CHIP_SELECTOR_CHIPS_CLOSE, DZS_CHIP_SELECTOR_CHIPS_SELECTED
} from "../config/dzs-chip-selector.config";
import {currentStatusType} from "../dzs-chip-selector.type";
import {DzsChipSelector} from "../dzs-chip-selector";


export function setupHandlers(selfInstance: DzsChipSelector) {


  selfInstance.$inputNewElement_.addEventListener('focus', handleInputEvent);
  selfInstance.$inputNewElement_.addEventListener('blur', handleInputEvent);
  selfInstance.$inputNewElement_.addEventListener('keyup', handleInputEvent);
  selfInstance.$autoCompleteList.addEventListener('click', handleAutoCompleteList);
  selfInstance.$elem_?.querySelector('.dzs-chip-selector--chip-list-wrapper')?.addEventListener('click', handleChipsClick);




  if(!selfInstance.chipSelectorOptions.viewIsWrapping){

    const resizeObserver = new ResizeObserver((entries) => {
      selfInstance.viewCheckIfNeedsWrapping(selfInstance);
      console.log('Size changed', entries);
    });

    resizeObserver.observe(selfInstance.$elem_);
  }


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
        targetOption ? (targetOption.currentStatus = currentStatusType.UNCHECKED) : console.log('[targetOption] targetOption not existing', selfInstance.autoCompleteOptions);
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


      const dataValueTarget = $target?.getAttribute('data-value');
      if(dataValueTarget){
        const dataValue = String(dataValueTarget);

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
}