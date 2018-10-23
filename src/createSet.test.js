import { createSet } from './createSet';

describe('createSet', () => {
  it('createSet returns an *ordered* set (smallest to greatest) that is the union of two *unordered* sets', () => {
    expect(createSet([1, 2, 3, 4], [2, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(createSet([4, 5, 8, 6], [1, 4, 9, 2])).toEqual([1, 2, 4, 5, 6, 8, 9]);
    expect(createSet([3, 2, 1], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(createSet([], [])).toEqual([]);
    expect(createSet([1], [])).toEqual([1]);
  });
});
