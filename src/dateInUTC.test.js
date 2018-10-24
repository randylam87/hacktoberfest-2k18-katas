import {dateInUTC} from './dateInUTC';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(dateInUTC()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(dateInUTC()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(dateInUTC()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(dateInUTC()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { dateInUTC(); }).toThrow();
 */

describe('dateInUTC returns date string when Date is passed', () => {

  it('dateInUTC returns date in ISO 8601 format YYYY-MM-DD in universal time', () => {
    expect(dateInUTC(new Date(1539839151184))).toEqual('2018-10-18');
  });

  it('dateInUTC throws error if Date is missing', () => {
    expect(() => {
      dateInUTC();
    }).toThrow();
  });
});
