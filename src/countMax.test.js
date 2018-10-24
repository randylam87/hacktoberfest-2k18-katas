import { countMax } from './countMax';

describe('countMax', () => {
  it('counts the number of instances of the max number in an array', () => {
    expect(countMax([99, 20, 99, 21, 22, 99, 50, 99])).toEqual(4)
    expect(countMax([3])).toEqual(1)
    expect(countMax([-1, -1, -3, 0, 0, -5])).toEqual(2)
  });
});
