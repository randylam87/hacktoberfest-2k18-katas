import { covariance } from './covariance';

describe('covariance', () => {
  it('should throw if the arguments are not non-empty arrays', () => {
    expect(() => covariance()).toThrow();
    expect(() => covariance(null, [1, 2, 3])).toThrow();
    expect(() => covariance([1, 2, 3], null)).toThrow();
    expect(() => covariance({}, '')).toThrow();
    expect(() => covariance([], [1, 5, 9])).toThrow();
  });

  it('should compute the variance with precision of 2', () => {
    expect(covariance([1, 4, 2, 3, 5], [2, 5, 3, 1, 4])).toEqual(2.50);
    expect(covariance([1, 3, 2, 5, 8, 7, 12, 2, 4], [8, 6, 9, 4, 3, 3,  2, 7, 7])).toEqual(-8.07);
  });
});
