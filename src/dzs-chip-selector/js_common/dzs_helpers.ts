export function domRemoveChildren($ulItems: HTMLElement): void {

  while ($ulItems.firstChild) {
    $ulItems.removeChild($ulItems.firstChild);
  }
}

export function matchSelector(t: HTMLElement, sel: string): null | HTMLElement {

  let matchedEl = null;
  while (t && t !== this) {
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