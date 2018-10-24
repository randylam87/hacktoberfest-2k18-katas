import { poundsToKilogram } from './poundsToKilogram';

describe('poundsToKilogram', () => {
  it('converts pounds to kilogram', () => {
    expect(poundsToKilogram(10)).toEqual(4.54);
    expect(poundsToKilogram(23.4)).toEqual(10.61);
    expect(poundsToKilogram(3.47)).toEqual(1.57);
    expect(poundsToKilogram(0)).toEqual(0);
    expect(poundsToKilogram(10)).not.toEqual(10);
  });
  it('does not convert string', () => {
    expect(() => poundsToKilogram("")).toThrow();
  });
  it('does not convert undefined', () => {
    expect(() => poundsToKilogram()).toThrow();
  });
});
