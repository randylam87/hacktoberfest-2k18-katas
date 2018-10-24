import { positiveAttitude } from './positiveAttitude';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(positiveAttitude()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(positiveAttitude()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(positiveAttitude()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(positiveAttitude()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { positiveAttitude(); }).toThrow();
 */

describe('positiveAttitude', () => {
  it('positiveAttitude removes/replaces negativity with posi vibes', () => {
    // TODO Your own assertion here
    expect(positiveAttitude("No I can't do that")).toEqual("Yes I can do that");
    expect(positiveAttitude("I shouldn't have fun with this")).toEqual("I should have fun with this");
    expect(positiveAttitude("No I don't care")).toEqual("Yes I do care");
  });

  it('positiveAttitude handles errors~', () => {
    // TODO Your own assertion here
    expect(positiveAttitude(null)).toEqual("Try again!");
  });

});
