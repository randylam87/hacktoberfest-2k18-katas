import { dropRight } from './dropRight';

describe('dropRight', () => {
    it('should drop last value if second parameter is not defined', () => {
        expect(dropRight([1, 2, 3])).toEqual([1, 2]);
        expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should drop n values from the end', () => {
        expect(dropRight([1, 2, 3], 2)).toEqual([1]);
        expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([1, 2, 3, 4, 5, 6, 7]);

    });

    it('should return an empty array if n is bigger than the array\'s length', () => {
        expect(dropRight([1, 2, 3], 5)).toEqual([]);
        expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)).toEqual([]);
    });

    it('should not drop anything if n is 0 ', () => {
        expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
        expect(dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

});
