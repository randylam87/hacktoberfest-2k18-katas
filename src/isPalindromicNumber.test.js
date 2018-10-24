import { isPalindromicNumber } from './isPalindromicNumber';

describe('isPalindromicNumber', () => {

  it('isPalindromicNumber does this thing...', () => {
    expect(isPalindromicNumber(12321)).toBeTruthy();
    expect(isPalindromicNumber(121)).toBeTruthy();
    expect(isPalindromicNumber(7)).toBeTruthy();
    expect(isPalindromicNumber(142353241)).toBeTruthy();
    expect(isPalindromicNumber(12345689)).toBeFalsy();
    expect(isPalindromicNumber(123)).toBeFalsy();
    expect(isPalindromicNumber(12)).toBeFalsy();
  });

  it('should work with strings', () => {
    expect(isPalindromicNumber('12321')).toBeTruthy();
    expect(isPalindromicNumber('121')).toBeTruthy();
    expect(isPalindromicNumber('1')).toBeTruthy();
    expect(isPalindromicNumber('142353241')).toBeTruthy();
    expect(isPalindromicNumber('12345689')).toBeFalsy();
    expect(isPalindromicNumber('123')).toBeFalsy();
    expect(isPalindromicNumber('142353242')).toBeFalsy();
  });

  it('isPalindromicNumber should throw with invalid parameters', () => {
    expect(() => isPalindromicNumber()).toThrow();
    expect(() => isPalindromicNumber('aba')).toThrow();
    expect(() => isPalindromicNumber('abbba')).toThrow();
    expect(() => isPalindromicNumber([1,1])).toThrow();
    expect(() => isPalindromicNumber(['123',1])).toThrow();
  });
})
