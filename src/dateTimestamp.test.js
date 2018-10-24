import { dateTimestamp } from './dateTimestamp';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(dateTimestamp()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(dateTimestamp()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(dateTimestamp()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(dateTimestamp()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { dateTimestamp(); }).toThrow();
 */

describe('dateTimestamp', () => {
  it('Returns timestamp of a date given in String YYYY-MM-DD', () => {
    expect(dateTimestamp('2018-04-12')).toBe(1523491200000);
  });

  it('Throws exception on invalid dates', () => {
    expect(() => dateTimestamp('Invalid date')).toThrow();
  });

});
