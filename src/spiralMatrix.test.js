import { spiralMatrix } from './spiralMatrix';

describe('spiralMatrix', () => {
  it('Valid test cases', () => {
    expect(spiralMatrix([2])).toEqual([2]);
  });

  it('should work', () => {
    expect(spiralMatrix(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    )).toEqual([1, 5, 9, 13, 14, 15, 16, 12, 8, 4, 3, 2, 6, 10, 11, 7]);
  })

  it('spiralizes', () => {
    expect(spiralMatrix(
      [
        [1, 2],
        [3, 4],
      ]
    )).toEqual([1, 3, 4, 2]);
  })

  it('pleas work', () => {
    expect(spiralMatrix(
      [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
      ]
    )).toEqual([1, 7, 13, 14, 15, 16, 17, 18, 12, 6, 5, 4, 3, 2, 8, 9, 10, 11]);
  })

  it('Invalid arg value', () => {
    expect(() => spiralMatrix(null)).toThrow();
    expect(() => spiralMatrix(undefined)).toThrow();
    expect(() => spiralMatrix("hello")).toThrow();
    expect(() => spiralMatrix(67)).toThrow();
  });

  it('Invalid matrix arg', () => {
    expect(() => spiralMatrix([
      []
    ])).toThrow();

    expect(() => spiralMatrix([
      [1, 2],
      [3, 4, 5, 6]
    ])).toThrow();

    expect(() => spiralMatrix(
      [
        [1, 2, 3]
      ]
    )).toThrow();

    expect(() => spiralMatrix(
      [
        [1, 2],
        ["what", 4]
      ]
    )).toThrow();
  });
});
