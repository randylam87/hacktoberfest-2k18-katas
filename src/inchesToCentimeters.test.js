import { inchesToCentimeters } from './inchesToCentimeters';

describe('inchesToCentimeters', () => {
  it('should convert inches to centimeters', () => {
    expect(inchesToCentimeters(5.26377953)).toEqual(13.37);
    expect(inchesToCentimeters(7)).toEqual(17.78);
    expect(inchesToCentimeters(2)).not.toEqual(2);
    expect(() => inchesToCentimeters("")).toThrow();
    expect(() => inchesToCentimeters()).toThrow();
  });
});
