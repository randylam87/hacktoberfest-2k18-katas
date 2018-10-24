import {
  digitSum
} from './digitSum';


describe('digitSum', () => {
  it('digitSum does this thing...', () => {
    expect(digitSum(123)).toEqual(6)
  });
  it('digitSum does this thing...', () => {
    expect(digitSum(99999)).toEqual(9)
  });
  it('digitSum does this thing...', () => {
    expect(digitSum(4)).toEqual(4)
  });
  it('digitSum throw error at negative number', () => {
    expect(() => digitSum(-7)).toThrow()
  });
});
