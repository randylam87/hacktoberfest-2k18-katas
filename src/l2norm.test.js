import { l2norm } from './l2norm';

describe('l2norm', () => {
  it('should throw if the arguments are not non-empty arrays', () => {
    expect(() => l2norm()).toThrow();
    expect(() => l2norm(null)).toThrow();
    expect(() => l2norm([])).toThrow();
    expect(() => l2norm({})).toThrow();
  });

  it('should compute the l2norm with precision of 2', () => {
    expect(l2norm([1, -4, 5])).toEqual(6.48);
    expect(l2norm([1, 3, 2, 5, 8, 7, 12, 2, 4])).toEqual(17.78);
  });
});
