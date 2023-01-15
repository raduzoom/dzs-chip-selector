export function domRemoveChildren($ulItems: HTMLElement): void {

  while ($ulItems.firstChild) {
    $ulItems.removeChild($ulItems.firstChild);
  }
}

export function insertHtml(t: HTMLElement, html: string, position = 'beforeend'): void{

  t.insertAdjacentHTML(<"beforebegin" | "afterbegin" | "beforeend" | "afterend">position, html);
}


export function getComputedProp(el: HTMLElement, cssProp = "min-width", isGetAsNumber = false): number | string
{
  console.log(el);
  console.trace();
  const val = window.getComputedStyle(el,null).getPropertyValue(cssProp);
  return isGetAsNumber ? parseFloat(val) : val;
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
  while (t && t !== (this as any)) {
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