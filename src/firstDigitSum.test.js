import { firstDigitSum } from './firstDigitSum';

describe('firstDigitSum valid args', () => {
  it('firstDigitSum does this thing...', () => {
    expect(firstDigitSum(100008)).toEqual(9);
    expect(firstDigitSum(325162)).toEqual(19);
    expect(firstDigitSum(99999)).toEqual(45);
    expect(firstDigitSum(10636408)).toEqual(28);
  });

  it('firstDigitSum invalid args', () => {
    expect(() => firstDigitSum('hola')).toThrow();
    expect(() => firstDigitSum([])).toThrow();
    expect(() => firstDigitSum({})).toThrow();
  });
});
