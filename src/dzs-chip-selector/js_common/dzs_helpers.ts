export function domRemoveChildren($ulItems: HTMLElement): void {

  if($ulItems && $ulItems.firstChild){
    while ($ulItems.firstChild) {
      $ulItems.removeChild($ulItems.firstChild);
    }
  }
}

export function insertHtml(t: HTMLElement, html: string, position = 'beforeend'): void{

  t.insertAdjacentHTML(<"beforebegin" | "afterbegin" | "beforeend" | "afterend">position, html);
}

/**
 * Returns the computed value of a given CSS property on a given element
 * @param {HTMLElement} el - An instance of HTMLElement for which the computed value of a CSS property is to be returned.
 * @param {string} [cssProp = "min-width"] - The CSS property for which the computed value is to be returned. The default value is "min-width".
 * @param {boolean} [isGetAsNumber = false] - A boolean value indicating whether the computed value should be returned as a number or a string. The default value is false.
 * @return {(number|string)} - If isGetAsNumber is set to false, the function returns the computed value of the specified CSS property as a string. If isGetAsNumber is set to true, the function returns the computed value of the specified CSS property as a number.
 * @throws {TypeError} - If the element passed as an argument is not an instance of HTMLElement.
*/
export function getComputedProp(el: HTMLElement, cssProp = "min-width", isGetAsNumber = false): number | string
{
  if(el){

    const val = (window as any).getComputedStyle(el,null).getPropertyValue(cssProp);
    return isGetAsNumber ? parseFloat(val) : val;
  }
  return '';
}
export function detectRegexPairs(str: string){
  let regExp = /dzs-chip-selector--skin-(.*?)( |$)/g;
  let match;
  const matches = [];

  while ((match = regExp.exec(str)) !== null) {
    matches.push(match);
  }

  return matches;
}

export function matchSelector(t: HTMLElement, sel: string): null | HTMLElement {

  let matchedEl = null;
  // @ts-ignore
  while (t && t !== (this as unknown)) {
    if (t && t.matches) {
      if (t.matches(sel)) {
        matchedEl = t;
        break;
      }
      t = t.parentNode as HTMLElement;
    } else {
      break;
    }
  }

  return matchedEl;

}