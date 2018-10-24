import { isUSPostalCode } from './isUSPostalCode';

describe('isUSPostalCode', () => {
  it('the given number is valid', () => {
    expect(isUSPostalCode('12345')).toBeTruthy();
    expect(isUSPostalCode(12345)).toBeTruthy();
    expect(isUSPostalCode('12345-6789')).toBeTruthy();
  });

  it('the given number is invalid', () => {
    expect(isUSPostalCode()).toBeFalsy();
    expect(isUSPostalCode('')).toBeFalsy();
    expect(isUSPostalCode(123456)).toBeFalsy();
    expect(isUSPostalCode(undefined)).toBeFalsy();
    expect(isUSPostalCode('1234')).toBeFalsy();
    expect(isUSPostalCode('12345-679')).toBeFalsy();
  });
});
