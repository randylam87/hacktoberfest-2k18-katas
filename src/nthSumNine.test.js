import { nthSumNine } from './nthSumNine';

describe('nthSumNine', () => {
  it('valid arg and return', () => {
    expect(nthSumNine(1)).toEqual(9);
    expect(nthSumNine(12)).toEqual(117);
    expect(nthSumNine(18)).toEqual(171);
    expect(nthSumNine(33)).toEqual(351);
    expect(nthSumNine(47)).toEqual(612);
  });

  it('invalid arg', () => {
    expect(() => nthSumNine()).toThrow();
    expect(() => nthSumNine(0)).toThrow();
    expect(() => nthSumNine(51)).toThrow();
    expect(() => nthSumNine('hola')).toThrow();
    expect(() => nthSumNine([])).toThrow();
    expect(() => nthSumNine({})).toThrow();
  });
});
