import {DzsChipSelector} from "../dzs-chip-selector";
import {DZS_CHIP_SELECTOR_CLASS_NAME} from "../config/dzs-chip-selector.config";
import {detectRegexPairs} from "../js_common/dzs_helpers";


export function initChipSelector(selfInstance: DzsChipSelector){
  selfInstance.styleIsSkinSet = false;

  (selfInstance.$elem_ as any).isDzsChipsInited = true;

  const matches = detectRegexPairs(selfInstance.$elem_.className);

  if(matches.length){
    selfInstance.styleIsSkinSet = true;
  }

  selfInstance.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--is-inited');

  if(!selfInstance.chipSelectorOptions.viewIsWrapping){

    selfInstance.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + '--view-one-line');
  }

  if(!selfInstance.styleIsSkinSet){
    selfInstance.$elem_.classList.add(DZS_CHIP_SELECTOR_CLASS_NAME + `--skin-${selfInstance.chipSelectorOptions.viewSkin}`);
  }
}