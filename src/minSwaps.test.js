import { minSwaps } from './minSwaps';

describe('minSwaps', () => {
  it('returns the correct number of swaps needed', () => {
    expect(minSwaps([4,3,1,2])).toEqual(3);
    expect(minSwaps([2,3,4,1,5])).toEqual(3);
    expect(minSwaps([1,3,5,2,4,6,8])).toEqual(3);
    expect(minSwaps([1,5,4,3,2])).toEqual(2);
  });

  it('should return 0 for an empty array', () => {
    expect(minSwaps([])).toEqual(0);
  });
});
