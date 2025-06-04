import {ChipSelectorOptions, currentStatusType} from "./dzs-chip-selector.type";
import {DzsChipSelector} from "./dzs-chip-selector";
import {dzsChipSelectorDefaultOptions} from "./config/dzs-chip-selector--defaultOptions";

class ResizeObserver {
  observe() {}
  unobserve() {}
}
describe('DzsChipSelector', () => {
  let $elem: HTMLElement;
  let chipSelectorOptions: ChipSelectorOptions;
  let dzsChipSelector: DzsChipSelector;
  beforeEach(() => {
    $elem = document.createElement('div');
    (window as any).ResizeObserver = ResizeObserver;
    chipSelectorOptions = {...dzsChipSelectorDefaultOptions};
    dzsChipSelector = new DzsChipSelector($elem, chipSelectorOptions, false);
  });

  test('should initialize the class', () => {
    dzsChipSelector.initClass();
    expect(dzsChipSelector).toBeInstanceOf(DzsChipSelector);
  });

  test('should set the placeholderNoItemsFound property', () => {
    dzsChipSelector.initClass();
    expect(dzsChipSelector.placeholderNoItemsFound).toBe(String(chipSelectorOptions.placeholderNoItemsFound));
  });

  test('should set the persistentOptions property', () => {
    dzsChipSelector.initClass();
    dzsChipSelector.readAttrForPersistentOptions();
    expect(dzsChipSelector.persistentOptions).toEqual([]);
  });

  test('should set the feedSource property to form if a form is found', () => {
    dzsChipSelector.initClass();
    const $form = document.createElement('form');
    $elem.appendChild($form);
    dzsChipSelector.reinit();
    expect(dzsChipSelector.feedSource).toBe('form');
  });

  test('should set the feedSource property to options if no form is found', () => {
    dzsChipSelector.initClass();
    dzsChipSelector.reinit();
    expect(dzsChipSelector.feedSource).toBe('form');
  });

  test('should update the chips from options', () => {
    dzsChipSelector.initClass();
    dzsChipSelector.persistentOptions = [{
      htmlContent: 'Test1',
      value: 'test1',
      currentStatus: currentStatusType.CHECKED
    }, {htmlContent: 'Test2', value: 'test2', currentStatus: currentStatusType.UNCHECKED}];
    dzsChipSelector.updateChipsFromOptions();

    const chips = $elem.querySelectorAll('.dzs-chip-selector--item');
    expect(chips.length).toBe(1);
    expect(chips[0].innerHTML).toContain('Test1');
  });

  test('should update the chips from options wrapping false', () => {
    dzsChipSelector.persistentOptions = [{
      htmlContent: 'Test1',
      value: 'test1',
      currentStatus: currentStatusType.CHECKED
    }, {htmlContent: 'Test2', value: 'test2', currentStatus: currentStatusType.UNCHECKED}];
    dzsChipSelector.chipSelectorOptions.viewIsWrapping = false;
    dzsChipSelector.initClass();
    dzsChipSelector.updateChipsFromOptions();
    jest.spyOn(globalThis, 'getComputedStyle');
    const chips = $elem.querySelectorAll('.dzs-chip-selector--item');
    expect(chips.length).toBe(1);
    expect(chips[0].innerHTML).toContain('Test1');
  });
});



describe('getOptionsFromForm', () => {
  let $elem: HTMLElement;
  let dzsChipSelector: DzsChipSelector;
  let $form: HTMLElement;
  beforeEach(() => {
    $elem = document.createElement('div');
    dzsChipSelector = new DzsChipSelector($elem, {});
    $form = document.createElement('form');
    $elem.appendChild($form);
  });

  test('should parse the form and set the persistentOptions and autoCompleteOptions properties', () => {
    const $label1 = document.createElement('label');
    $label1.innerHTML = '<input type="checkbox" value="option1" checked>Option 1';
    const $label2 = document.createElement('label');
    $label2.innerHTML = '<input type="checkbox" value="option2">Option 2';
    $form.appendChild($label1);
    $form.appendChild($label2);
    dzsChipSelector.getOptionsFromForm($form);
    expect(dzsChipSelector.persistentOptions).toEqual([
      {
        htmlContent: 'Option 1',
        value: 'option1',
        currentStatus: currentStatusType.CHECKED
      },
      {
        htmlContent: 'Option 2',
        value: 'option2',
        currentStatus: currentStatusType.UNCHECKED
      }
    ]);
    expect(dzsChipSelector.autoCompleteOptions).toEqual([
      {
        htmlContent: 'Option 1',
        value: 'option1',
        currentStatus: currentStatusType.CHECKED
      },
      {
        htmlContent: 'Option 2',
        value: 'option2',
        currentStatus: currentStatusType.UNCHECKED
      }
    ]);
  });
})


describe('updateListFromOptions', () => {
  let $elem: HTMLElement;
  let dzsChipSelector: DzsChipSelector;
  let $autoCompleteList: HTMLElement;
  beforeEach(() => {
    $elem = document.createElement('div');
    dzsChipSelector = new DzsChipSelector($elem, {});
  });


  test('should update the autocomplete list with the options', () => {
    // @ts-ignore
    dzsChipSelector.autoCompleteOptions = [      {        htmlContent: 'Option 1',        value: 'option1'      },      {        htmlContent: 'Option 2',        value: 'option2'      }    ];
    dzsChipSelector.createListFromOptions();
    dzsChipSelector.updateListFromOptions();

    const html = (dzsChipSelector.$autoCompleteList as any).querySelector('.dzs-chip-selector--autocompletelist--items').innerHTML
    expect(html).toBe('<li class="dzs-chip-selector--autocompletelist--items--item " data-value="option1">Option 1</li><li class="dzs-chip-selector--autocompletelist--items--item " data-value="option2">Option 2</li>');
  });

})




describe('autoCompleteFilterResults', () => {
  let $elem: HTMLElement;
  let dzsChipSelector: DzsChipSelector;
  beforeEach(() => {
    $elem = document.createElement('div');
    dzsChipSelector = new DzsChipSelector($elem, {});
  });

  test('should filter the options based on the query string', () => {
    dzsChipSelector.persistentOptions = [
      {
        htmlContent: 'Option 1',
        value: 'option1'
      },
      {
        htmlContent: 'Option 2',
        value: 'option2'
      },
      {
        htmlContent: 'Test Option',
        value: 'test'
      }
    ] as any;
    dzsChipSelector.autoCompleteOptions = [
      {
        htmlContent: 'Option 1',
        value: 'option1'
      },
      {
        htmlContent: 'Option 2',
        value: 'option2'
      },
      {
        htmlContent: 'Test Option',
        value: 'test'
      }
    ] as any;
    dzsChipSelector.updateListFromOptions();
    dzsChipSelector.reinit();
    dzsChipSelector.inputForm_currentQueryString = 'test';
    dzsChipSelector.autoCompleteFilterResults(dzsChipSelector.inputForm_currentQueryString);




    // @ts-ignore
    let findIsHidden = dzsChipSelector?.$autoCompleteList?.querySelector('[data-value="option2"]').classList.contains('is-hidden');
    expect(findIsHidden).toEqual(true);

    // @ts-ignore
  findIsHidden = dzsChipSelector?.$autoCompleteList?.querySelector('[data-value="test"]').classList.contains('is-hidden');
  expect(findIsHidden).toEqual(false);
  });


});

describe('getAutocompleteItemDomFromValue', () => {
  test('should return the DOM element matching the value', () => {
    const $elem = document.createElement('div');
    const dzsChipSelector = new DzsChipSelector($elem, {}, false);

    dzsChipSelector.initClass();

    dzsChipSelector.autoCompleteOptions = [
      { htmlContent: 'Option 1', value: 'option1', currentStatus: currentStatusType.CHECKED },
      { htmlContent: 'Option 2', value: 'option2', currentStatus: currentStatusType.UNCHECKED },
    ];

    dzsChipSelector.createListFromOptions();

    const found = dzsChipSelector.getAutocompleteItemDomFromValue('option2');

    expect(found).not.toBeNull();
    expect((found as HTMLElement).getAttribute('data-value')).toBe('option2');
  });
});
