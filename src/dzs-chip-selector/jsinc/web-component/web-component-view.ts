import {DzsChipSelectorWrapper} from "../../dzs-chip-selector--web-components";
import styleChipTextContent from "../../dzs-chip-selector.scss";
import {ChipSelectorOptions} from "../../dzs-chip-selector.type";


export const appendStyle = (dzsChipSelectorWrapper: DzsChipSelectorWrapper) => {

    // Create some CSS to apply to the shadow dom

    let skinCss = null;
    let skinLink: HTMLElement | null = null;
    let styleChipInner = null;

    dzsChipSelectorWrapper.childNodes.forEach((el) => {
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


    dzsChipSelectorWrapper.shadow.appendChild(styleChip);
    if (styleChipInner) {
        dzsChipSelectorWrapper.shadow.appendChild(styleChipInner);
    }
    if (skinLink) {
        (skinLink as HTMLElement).setAttribute('href', String((skinLink as HTMLElement).getAttribute('data-lazy-href')));
        dzsChipSelectorWrapper.shadow.appendChild(skinLink);
    }
}


export const getChipSelectorOptions = (dzsChipSelectorWrapper: DzsChipSelectorWrapper): ChipSelectorOptions => {

    let chipSelectorOptions: ChipSelectorOptions = {};


    if (dzsChipSelectorWrapper.getAttribute('data-chip-selector-options')) {
        try {
            const dataChipSelectorOptions = dzsChipSelectorWrapper.getAttribute('data-chip-selector-options');
            chipSelectorOptions = JSON.parse(String(dataChipSelectorOptions));
        } catch (e) {
            console.log('cannot parse', e);
        }
    }
    const dataPersistentOptions = dzsChipSelectorWrapper.getAttribute('data-persistentOptions');
    chipSelectorOptions.persistentOptions = JSON.parse(String(dataPersistentOptions));

    return chipSelectorOptions;
}