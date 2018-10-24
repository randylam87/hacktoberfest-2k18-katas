import { isCircularPrime } from './isCircularPrime';

describe('isCircularPrime', () => {
  it('should throw if the argument is not a positive number', () => {
    expect(() => isCircularPrime('')).toThrow();
    expect(() => isCircularPrime(-1)).toThrow();
    expect(() => isCircularPrime([])).toThrow();
  });

  it('should return true if the argument is a circular prime', () => {
    expect(isCircularPrime(71)).toEqual(true);
    expect(isCircularPrime(197)).toEqual(true);
  });

  it('should return false if the argument is not a circular prime', () => {
    expect(isCircularPrime(53)).toEqual(false);
    expect(isCircularPrime(182)).toEqual(false);
  });
});
