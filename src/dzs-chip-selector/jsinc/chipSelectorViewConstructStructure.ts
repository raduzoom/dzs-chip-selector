import {DzsChipSelector} from "../dzs-chip-selector";
import {insertHtml} from "../js_common/dzs_helpers";
import {DZS_CHIP_SELECTOR_CSS_SELECTOR_OVERFLOW_TOOLTIP_CONTENT} from "../config/dzs-chip-selector.config";
import {ChipSelectorItem} from "../dzs-chip-selector.type";

export function viewChipSelectorChipItemStructure(item: ChipSelectorItem) {
  return `<li data-value="${item.value}" class="dzs-chip-selector--item">
<div class="dzs-chip-selector--item--content">${item.htmlContent}</div>
<button class="dzs-chip-selector--item--remove" matChipRemove type="button">
  <figure>x</figure>
</button>
</li>`;
}

export function chipSelectorInitStructure(selfInstance: DzsChipSelector) {


  if (!selfInstance.$elem_.querySelector('.dzs-chip-selector--container')) {

    const chipListString = `<div class="dzs-chip-selector--chip-list">
              <ul class="dzs-chip-selector--chip-list-wrapper">

              </ul>
            </div>`;


    const chipListOverflowPlaceholder = `<div class="dzs-chip-selector--overflow-placeholder"><span>...</span>
  <span class="${DZS_CHIP_SELECTOR_CSS_SELECTOR_OVERFLOW_TOOLTIP_CONTENT}">This is the tooltip text</span></div>`;

    const chipListInputNewElement = `<label class="dzs-chip-selector--input-new-element--label">
              <input placeholder="${selfInstance.chipSelectorOptions.inputPlaceholderText}" class="dzs-chip-selector--input-new-element"
                     autocomplete="off"
                     role="combobox" aria-autocomplete="list" aria-expanded="false"
                     aria-haspopup="listbox"
                     aria-owns="mat-autocomplete-1">
            </label>`;


    insertHtml(selfInstance.$elem_, `<div class="dzs-chip-selector--container">
          <div class="dzs-chip-selector--form-field">
            ${chipListString}
            ${selfInstance.chipSelectorOptions.viewIsWrapping ? '' : chipListOverflowPlaceholder}
            ${chipListInputNewElement}
          </div>
        </div>`)

  }

  if (!selfInstance.$elem_.querySelector('.dzs-chip-selector--autocompletelist')) {

    insertHtml(selfInstance.$elem_, `<div class="dzs-chip-selector--autocompletelist">
          <div class="dzs-chip-selector--autocompletelist--inner">
            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>
            <ul class="dzs-chip-selector--autocompletelist--items">
            </ul>
          </div>
        </div>`)

  }
}