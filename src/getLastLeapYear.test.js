import { getLastLeapYear } from './getLastLeapYear';

describe('getLastLeapYear', () => {
  it('returns the first leap year before 2018 (Date)', () => {
    expect(getLastLeapYear(new Date(2018,0,1,12,0,0,0))).toEqual(2016);
  });

  it('returns the first leap year before 2020 (Number)', () => {
    expect(getLastLeapYear(2020)).toEqual(2016);
  });

  it('returns the first leap year before 2025 (Number)', () => {
    expect(getLastLeapYear(2025)).toEqual(2024);
  });

  it('returns the first leap year before 1991 (Number)', () => {
    expect(getLastLeapYear(1991)).toEqual(1988);
  });

  it('returns null if year is null', () => {
    expect(getLastLeapYear(null)).toBeNull();
  });
});
