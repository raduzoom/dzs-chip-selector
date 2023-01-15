import {detectRegexPairs, domRemoveChildren, getComputedProp, insertHtml, matchSelector} from "./dzs_helpers";

describe('detectRegexPairs', () => {
  test('it should return the correct matches for a given input string', () => {
    const str = "dzs-chip-selector--skin-default dzs-chip-selector--skin-primary";
    const matches = detectRegexPairs(str);
    expect(matches.length).toBe(2);
    expect(matches[0][1]).toBe("default");
    expect(matches[1][1]).toBe("primary");
  });
});


describe('matchSelector', () => {
  test('should return null if no match is found', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);
    expect(matchSelector(span, 'p')).toBe(null);
  });
  test('should return the matching element if one is found', () => {
    const div = document.createElement('div');
    div.classList.add('test');
    expect(matchSelector(div, '.test')).toBe(div);
  });
})
describe('domRemoveChildren', () => {
  test('should remove all children of the provided element', () => {
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    ul.appendChild(li1);
    ul.appendChild(li2);
    domRemoveChildren(ul);
    expect(ul.childNodes.length).toBe(0);
  });

  test('should not remove any children if the provided element has none', () => {
    const ul = document.createElement('ul');
    domRemoveChildren(ul);
    expect(ul.childNodes.length).toBe(0);
  });
})


describe('getComputedProp', () => {
  test('should return the value of the css property as a string', () => {
    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    expect(getComputedProp(div, 'width')).toBe('100px');
    document.body.removeChild(div);
  });

  test('should return the value of the css property as a number', () => {
    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    expect(getComputedProp(div, 'width', true)).toBe(100);
    document.body.removeChild(div);
  });

  test('should return the default value of "min-width" if no property is provided', () => {
    const div = document.createElement('div');
    div.style.minWidth = '100px';
    document.body.appendChild(div);
    expect(getComputedProp(div)).toBe('100px');
    document.body.removeChild(div);
  });
});

describe('insertHtml', () => {
  test('should insert html at the end of the provided element', () => {
    const div = document.createElement('div');
    insertHtml(div, '<p>Test</p>');
    expect(div.innerHTML).toBe('<p>Test</p>');
  });

  test('should insert html at the start of the provided element', () => {
    const div = document.createElement('div');
    insertHtml(div, '<p>Test</p>', 'afterbegin');
    expect(div.innerHTML).toBe('<p>Test</p>');
  });

});
