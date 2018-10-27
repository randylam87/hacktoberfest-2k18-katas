import { parenthesisMatcher } from './parenthesisMatcher';

describe('parenthesisMatcher', () => {
  it('should give correct answer', () => {
    expect(parenthesisMatcher(')))())((()))((')).toEqual(8);
  });

  it('should give correct answer, when only opening brackets', () => {
    expect(parenthesisMatcher('((((((((((((')).toEqual(0);
  });

  it('should give correct answer, when only closing brackets', () => {
    expect(parenthesisMatcher('))))))))))))))))))')).toEqual(18)
  });
});
