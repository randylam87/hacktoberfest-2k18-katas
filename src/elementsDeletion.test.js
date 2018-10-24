import { elementsDeletion } from './elementsDeletion';

describe('elementsDeletion', () => {
  it('returns the number of element deletions required', () => {
    expect(elementsDeletion([1, 2, 3, 4], [4, 1, 2])).toEqual(1);
  });

  it('returns 0 if arrays have the same elements', () => {
    expect(elementsDeletion([1, 2, 3, 4], [4, 3, 1, 2])).toEqual(0);
  });

  it('works with strings', () => {
    expect(elementsDeletion('bacdc', 'dcbad')).toEqual(1);
  });

  it('throws error if parameters are missing', () => {
    expect(() => elementsDeletion()).toThrow();
  });
});
