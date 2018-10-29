import { candy } from './candy';

// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(candy()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(candy()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(candy()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(candy()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { candy(); }).toThrow();
 */

describe('candy', () => {
  it('Should return 5 given an array [1,0,2]', () => {
    // You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
    expect(candy([1,0,2])).toEqual(5);
  });

  it('Should return 4 given an array [1,2,2]', () => {
    // You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
    // The third child gets 1 candy because it satisfies the above two conditions.
    expect(candy([1,2,2])).toEqual(4);
  });

  it('should handle invalid input', () => {
    expect(() => candy()).toThrow();
    expect(() => candy( 'test' )).toThrow();
    expect(() => candy( 123.456 )).toThrow();
    expect(() => candy( {} )).toThrow();
    expect(() => candy( false )).toThrow();
    expect(() => candy( null )).toThrow();
  });
});
