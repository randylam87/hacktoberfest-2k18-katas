import { isIPAddress } from './isIPAddress';

describe('isIPAddress', () => {
  it('the given number is valid', () => {
    expect(isIPAddress('1.2.3.4')).toBeTruthy();
    expect(isIPAddress('192.168.0.1')).toBeTruthy();
    expect(isIPAddress('0.0.0.0')).toBeTruthy();
  });

  it('the given number is invalid', () => {
    expect(isIPAddress()).toBeFalsy();
    expect(isIPAddress('')).toBeFalsy();
    expect(isIPAddress(1)).toBeFalsy();
    expect(isIPAddress(undefined)).toBeFalsy();
    expect(isIPAddress('123.045.67.89')).toBeFalsy();
    expect(isIPAddress('abc.def.ghi.jkl')).toBeFalsy();
  });
});
