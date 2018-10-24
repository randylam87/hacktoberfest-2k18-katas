import {
  isAutomorphic
} from './isAutomorphic';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(isAutomorphic()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(isAutomorphic()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(isAutomorphic()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(isAutomorphic()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { isAutomorphic(); }).toThrow();
 */

describe('isAutomorphic', () => {
  it('Invalid param', () => {
    expect(() => isAutomorphic()).toThrow();
    expect(() => isAutomorphic(undefined)).toThrow();
    expect(() => isAutomorphic(null)).toThrow();
    expect(() => isAutomorphic('1')).toThrow();
  });

  it('Check test...', () => {
    expect(isAutomorphic(1)).toEqual('Automorphic');
    expect(isAutomorphic(9)).toEqual('Not automorphic');
    expect(isAutomorphic(625)).toEqual('Automorphic');
    expect(isAutomorphic(25)).toEqual('Automorphic');
    expect(isAutomorphic(53)).toEqual('Not automorphic');
  });
});
