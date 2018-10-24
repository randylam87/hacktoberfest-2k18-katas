import {
  pickPeaks
} from './pickPeaks';

describe('pickPeaks', () => {
  it('pickPeaks should return', () => {
    expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({
      pos: [3, 7],
      peaks: [6, 3]
    });
    expect(pickPeaks(1, 2, 2, 2, 1)).toEqual({
      pos: [1],
      peaks: [2]
    });
    expect(pickPeaks(1, 2, 2, 2, 3)).toEqual({
      pos: [],
      peaks: []
    });
  });

  it('pickPeaks should throw errors with invalid args', () => {
    expect(() => pickPeaks()).toThrow();
    expect(() => pickPeaks(null)).toThrow();
    expect(() => pickPeaks(undefined)).toThrow();
    expect(() => pickPeaks([])).toThrow();
    expect(() => pickPeaks([true])).toThrow();
    expect(() => pickPeaks([1, "wtf", 3])).toThrow();
    expect(() => pickPeaks(1, 2, 3)).toThrow();
  });
});
