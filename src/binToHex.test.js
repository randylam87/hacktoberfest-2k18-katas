import { binToHex } from './binToHex';

describe('binToHex', () => {
  it('should throw if the input is not a positive integer', () => {
    expect(() => binToHex('')).toThrow();
    expect(() => binToHex([])).toThrow();
    expect(() => binToHex(null)).toThrow();
    expect(() => binToHex(undefined)).toThrow();
    expect(() => binToHex(-2)).toThrow();
  });

  it('should convert a binary number into hexadecimal', () => {
    expect(binToHex(1100)).toEqual('c');
    expect(binToHex(10011010)).toEqual('9a');
  });
});
