import { palindrome } from './palindrome';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(palindrome()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(palindrome()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(palindrome()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(palindrome()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { palindrome(); }).toThrow();
 */

describe('palindrome', () => {
  it('palindrome returns true', () => {
    expect(palindrome("eye")).toBeTruthy();
    expect(palindrome("never odd or even")).toBeTruthy();
    expect(palindrome("yass")).toBeFalsy();
    expect(palindrome(123)).toThrow();
	
  });
});
