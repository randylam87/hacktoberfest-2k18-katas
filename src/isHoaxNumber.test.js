import { isHoaxNumber } from './isHoaxNumber';

describe('isHoaxNumber', () => {
  it('throws where there is not input', () => {
    expect(() => isHoaxNumber()).toThrow();
  });

  it('the given number is Hoax', () => {
    expect(isHoaxNumber(22)).toBeTruthy();
    expect(isHoaxNumber(84)).toBeTruthy();
  });

  it('the given number is not Hoax', () => {
    expect(isHoaxNumber(19)).toBeFalsy();
  });
});
