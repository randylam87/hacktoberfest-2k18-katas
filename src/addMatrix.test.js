import { addMatrix } from './addMatrix';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(addMatrix()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(addMatrix()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(addMatrix()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(addMatrix()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { addMatrix(); }).toThrow();
 */

describe('addMatrix', () => {
  it('Has Insufficient Parameters', () => {
    expect(() => addMatrix()).toThrow();
    expect(() => addMatrix([1,2,3])).toThrow();
  });

  it('Has Invalid Parameters', () => {
    expect(() => addMatrix("a", [1, 2, 3])).toThrow();
    expect(() => addMatrix([1, 2, 3], null)).toThrow();
  });

  it('Has Irregular Matrices', () => {
    expect(() => addMatrix([1, 2, 3, [1, 2, 3]], [1, 2, 3, 4])).toThrow();
    expect(() => addMatrix([[1],[1],[1],[1]], [[1], 2, 3, 4])).toThrow();
  });

  it('Has Mismatched Dimensions of Matrices', () => {
    expect(() => addMatrix([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [5, 4, 6], [6, 7, 8]])).toThrow();
    expect(() => addMatrix([[1],[1],[1],[1]], [[1], [2]])).toThrow();
  });

  it('Adds Matrices', () => {
      expect(() => addMatrix([1, 2, 3], [2, 3, 4])).toEqual([3, 5, 7]);
      expect(() => addMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[0, 1, 3], [1, 0, 4], [5, 6, 7]])).toEqual([[1, 1, 3], [1, 1, 4], [5, 6, 8]]);
  });
});
