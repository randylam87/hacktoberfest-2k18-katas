import {
  findDigitalRoot
} from './findDigitalRoot';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(findDigitalRoot()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(findDigitalRoot()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(findDigitalRoot()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(findDigitalRoot()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { findDigitalRoot(); }).toThrow();
 */

describe('findDigitalRoot', () => {
  it('digital root is...', () => {
    expect(findDigitalRoot()).toThrow();
    expect(findDigitalRoot(null)).toThrow();
    expect(findDigitalRoot(undefined)).toThrow();
    expect(findDigitalRoot('str')).toThrow();
    expect(findDigitalRoot([])).toThrow();
  });

  it('digital root is...', () => {
    expect(findDigitalRoot(16)).toEqual(7);  // 1 + 6 = 7
    expect(findDigitalRoot(942)).toEqual(6); // 9 + 4 + 2 = 15 -> 1 + 5 = 6
    expect(findDigitalRoot(132189)).toEqual(6);  // 1 + 3 + 2 + 1 + 8 + 9 = 24 -> 2 + 4 = 6 
  });
});
