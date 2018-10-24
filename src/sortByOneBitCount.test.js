import { sortByOneBitCount } from './sortByOneBitCount';

describe('sortByOneBitCount', () => {
  it('sorts an array of numbers by their 1 bit count ascending', () => {
    expect(sortByOneBitCount([1, 2, 3, 4, 5, 6])).toBe([1, 2, 4, 3, 5, 6]);
    expect(sortByOneBitCount([8, 7, 6, 5, 4, 3, 2, 1])).toBe([8, 4, 2, 1, 6, 5, 3, 7]);
  });

  it('removes anything that is not a Number', () => {
    expect(sortByOneBitCount([1, null, 3, '4', 5, 'six'])).toBe([1, 3, 5]);
  });

  it('handles empty arrays', () => {
    expect(sortByOneBitCount([])).toBe([]);
  });

  it('handles non Array arguments as empty arrays', () => {
    expect(sortByOneBitCount('anything')).toBe([]);
  });
});
