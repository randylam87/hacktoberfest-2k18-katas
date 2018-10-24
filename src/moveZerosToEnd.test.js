import {
  moveZerosToEnd
} from './moveZerosToEnd';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(moveZerosToEnd()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(moveZerosToEnd()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(moveZerosToEnd()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(moveZerosToEnd()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { moveZerosToEnd(); }).toThrow();
 */

describe('moveZerosToEnd', () => {
  it('invalid param', () => {
    expect(moveZerosToEnd([])).toThrow();
    expect(moveZerosToEnd(undefined)).toThrow();
    expect(moveZerosToEnd(null)).toThrow();
    expect(moveZerosToEnd('a')).toThrow();
  });

  it('moveZerosToEnd does this thing...', () => {
    expect(moveZerosToEnd([1, 0, 0, 2])).toEqual([1, 2, 0, 0]);
    expect(moveZerosToEnd([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toEqual([false, 1, 1, 2, 1, 3, "a", 0, 0]);
  });
});
