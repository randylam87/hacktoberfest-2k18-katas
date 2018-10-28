import {
  isCoPrime
} from './isCoPrime';

describe('isCoPrime', () => {
  it('should be true', () => {
    expect(isCoPrime(2, 3)).toBeTruthy();
    expect(isCoPrime(21, 22)).toBeTruthy();
    expect(isCoPrime(14, 15)).toBeTruthy();
  });

  it('should be false', () => {
    expect(isCoPrime(0, 5)).toBeFalsy();
    expect(isCoPrime(4, 6)).toBeFalsy();
    expect(isCoPrime(6, 8)).toBeFalsy();
  });

  it('should throw', () => {
    expect(isCoPrime()).toThrow();
    expect(isCoPrime(1)).toThrow();
    expect(isCoPrime(1, 2, 3)).toThrow();
  });
});
