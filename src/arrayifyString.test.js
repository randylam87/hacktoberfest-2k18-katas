import { arrayifyString } from './arrayifyString';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(arrayifyString()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(arrayifyString()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(arrayifyString()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(arrayifyString()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { arrayifyString(); }).toThrow();
 */

const charifyArray = (arr) => {
  let temp = arr;
  let depth = 0;
  while (temp.length > 0) {
    temp = temp[0];
    depth++;
  }
  return String.fromCharCode(depth);
};

const stringifyArray = (arr) => {
  return arr.map(charifyArray).join('');
};

describe('arrayifyString', () => {
  it('It correctly encodes the string.', () => {
    expect(stringifyArray(arrayifyString('Hello world!'))).toEqual('Hello world!');
    expect(stringifyArray(arrayifyString('你好'))).toEqual('你好');
    expect(stringifyArray(arrayifyString('Γειά σου Κόσμε'))).toEqual('Γειά σου Κόσμε');
  });

  it('It returns an empty array if the string is empty.', () => {
    expect(JSON.stringify(arrayifyString(''))).toEqual('[]');
  });
});
