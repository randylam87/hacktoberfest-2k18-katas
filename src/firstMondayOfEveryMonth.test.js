import { firstMondayOfEveryMonth } from './firstMondayOfEveryMonth';

describe('firstMondayOfEveryMonth', () => {
  it('returns an associative array linking months (as 3 letter keys, example: "Jan") to the day in month of first monday given year 2018', () => {
    expect(firstMondayOfEveryMonth(2018)).toEqual({
      'Jan': 1,
      'Feb': 5,
      'Mar': 5,
      'Apr': 2,
      'May': 7,
      'Jun': 4,
      'Jul': 2,
      'Aug': 6,
      'Sep': 3,
      'Oct': 1,
      'Nov': 5,
      'Dec': 3
    });
  });

  it('returns an associative array linking months (as 3 letter keys, example: "Jan") to the day in month of first monday given year 2017', () => {
    expect(firstMondayOfEveryMonth(2017)).toEqual({
      'Jan': 2,
      'Feb': 6,
      'Mar': 6,
      'Apr': 3,
      'May': 1,
      'Jun': 5,
      'Jul': 3,
      'Aug': 7,
      'Sep': 4,
      'Oct': 2,
      'Nov': 6,
      'Dec': 4
    });
  });
});
