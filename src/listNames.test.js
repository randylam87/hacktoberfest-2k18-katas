import { listNames } from './listNames';

describe('listNames', () => {
  it('returns a string of names seperated by commas and an ampersand', () => {
    expect(listNames([
      'Bob',
      'Jane',
      'John'
    ]).toEqual('Bob, Jane & John'))
  });

  it('should return an empty string if there are no names', () => {
    expect(listNames([]).toEqual(''))
  });

  it('should handle one name', () => {
    expect(listNames([
      'Bob',
      'Jane',
      'John'
    ]).toEqual('Bob'))
  });

  it('should handle two names', () => {
    expect(listNames([
      'Bob',
      'Jane',
    ]).toEqual('Bob & Jane'))
  });
});
