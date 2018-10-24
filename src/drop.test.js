import { drop } from './drop';

describe('drop', () => {
  it('should drop first value if second parameter is not defined', () => {
      expect(drop([1, 2, 3])).toEqual([2, 3]);
      expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should drop n values from the beginning', () => {
      expect(drop([1, 2, 3], 2)).toEqual([3]);
      expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([3, 4, 5, 6, 7, 8, 9]);

  });

  it('should return an empty array if n is bigger than the array\'s length', () => {
      expect(drop([1, 2, 3], 5)).toEqual([]);
      expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)).toEqual([]);
  });

    it('should not drop anything if n is 0 ', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
        expect(drop([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

});
