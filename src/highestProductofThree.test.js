import { highestProductofThree } from './highestProductofThree';

describe('highestProductofThree', () => {
  it('Given an arrayOfInts, find the highestProduct you can get from three of the integers.', () => {
    expect(highestProductofThree([10, 3, 5, 6, 20])).toEqual(1200);
    expect(highestProductofThree([-10, -3, -5, -6, -20])).toEqual(-90);
    expect(highestProductofThree([1, -4, 3, -6, 7, 0])).toEqual(168);
  });
});
