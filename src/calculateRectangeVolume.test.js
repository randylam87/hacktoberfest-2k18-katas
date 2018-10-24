import { calculateRectangeVolume } from './calculateRectangeVolume';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(calculateRectangeVolume()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(calculateRectangeVolume()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(calculateRectangeVolume()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(calculateRectangeVolume()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { calculateRectangeVolume(); }).toThrow();
 */

describe('calculateRectangeVolume', () => {
  it('calculateRectangeVolume throws error', () => {
    expect(() => { calculateRectangeVolume()}).toThrow();
    expect(() => { calculateRectangeVolume({})}).toThrow();
    expect(() => {calculateRectangeVolume(1)}).toThrow();
    expect(() => {calculateRectangeVolume('asdfasd')}).toThrow();
    expect(() => {calculateRectangeVolume([12, 3, 6])}).toThrow();
  });

  it('calculates all the rectangle volume in a set of 2 dimention array', () => {
    expect(calculateRectangeVolume([[1, 2, 3]])).toEqual([6]);
    expect(calculateRectangeVolume([[3,4,1], [8, 10,1]])).toEqual([12, 80]);
    expect(calculateRectangeVolume([[1,2,1], [4, 2, 1], [8, 18, 1], [12, 5, 1]])).toEqual([2, 8, 144, 60]);
  });
});
