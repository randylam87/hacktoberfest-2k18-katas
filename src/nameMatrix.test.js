import {
  nameMatrix
} from './nameMatrix';

describe('nameMatrix', () => {
  it('converts name to perfect square matrix', () => {
    expect(nameMatrix('Elie')).toEqual([
      ['E', 'l'],
      ['i', 'e']
    ]);

    expect(nameMatrix('Samir')).toEqual([
      ['S', 'a', 'm'],
      ['i', 'r', '-'],
      ['-', '-', '-']
    ]);

    expect(nameMatrix('Hacktoberfest')).toEqual([
      ['H', 'a', 'c', 'k'],
      ['t', 'o', 'b', 'e'],
      ['r', 'f', 'e', 's'],
      ['t', '-', '-', '-']
    ]);
  });
});
