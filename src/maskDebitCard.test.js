import {
  maskDebitCard
} from './maskDebitCard';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(maskDebitCard()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(maskDebitCard()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(maskDebitCard()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(maskDebitCard()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { maskDebitCard(); }).toThrow();
 */

describe('maskDebitCard', () => {
  it('throws error when there is no input', () => {
    expect(() => maskDebitCard()).toThrow();
  });

  it('your masked debit card number', () => {
    expect(maskDebitCard('9986364607937896')).toEqual('############7896');
    expect(maskDebitCard('7937896998636460')).toEqual('############6460');
    expect(maskDebitCard('122')).toEqual('122');
  });
});
