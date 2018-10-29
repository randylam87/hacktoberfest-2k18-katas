import { isPalindromeStringOrNumber } from './isPalindromeStringOrNumber';

describe('isPalindromeStringOrNumber', () => {
  it('should return true if a string is palindromic, otherwise false', () => {
    expect(isPalindromeStringOrNumber('madam')).toBeTruthy();
    expect(isPalindromeStringOrNumber('dad')).toBeTruthy();
    expect(isPalindromeStringOrNumber('banana')).toBeFalsy();
  });

  it('should return true if a number is palindromic, otherwise false', () => {
    expect(isPalindromeStringOrNumber(123454321)).toBeTruthy();
    expect(isPalindromeStringOrNumber(100)).toBeFalsy();
  });

  it('should throw if it receives no args or something other than a number or string', () => {
    expect(() => isPalindromeStringOrNumber()).toThrow();
    expect(() => isPalindromeStringOrNumber(null)).toThrow();
    expect(() => isPalindromeStringOrNumber([1, 2, 'hello'])).toThrow();
    expect(() => isPalindromeStringOrNumber('world', 3)).toThrow();
  });
});
