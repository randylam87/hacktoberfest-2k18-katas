import { getNextLeapYear } from './getNextLeapYear';

describe('getNextLeapYear', () => {
  it('returns the first leap year after 2018 (Date)', () => {
    expect(getNextLeapYear(new Date(2018,0,1,12,0,0,0))).toEqual(2020);
  });

  it('returns the first leap year after 2020 (Number)', () => {
    expect(getNextLeapYear(2020)).toEqual(2024);
  });

  it('returns the first leap year after 2025 (Number)', () => {
    expect(getNextLeapYear(2025)).toEqual(2028);
  });

  it('returns the first leap year after 1991 (Number)', () => {
    expect(getNextLeapYear(1991)).toEqual(1992);
  });

  it('returns the first leap year after 1991 (Number)', () => {
    expect(getNextLeapYear(null)).toBeNull();
  });
});
