import { filterObject } from './filterObject';

describe('filterObject', () => {
  it('should throw when the first argument is not an object', () => {
    expect(() => filterObject('foo', ['name', 'age'])).toThrow();
    expect(() => filterObject(123, ['name', 'age'])).toThrow();
    expect(() => filterObject([], ['name', 'age'])).toThrow();
    expect(() => filterObject(() => {}, ['name', 'age'])).toThrow();
  });

  it('should throw when the sencond argument is not a non-empty array', () => {
    expect(() => filterObject({ name: 'John' }, 'foo')).toThrow();
    expect(() => filterObject({ name: 'John' }, 123)).toThrow();
    expect(() => filterObject({ name: 'John' }, {})).toThrow();
    expect(() => filterObject({ name: 'John' }, [])).toThrow();
  });

  it('should return an empty object when the keys don\'t exist on the object', () => {
    expect(filterObject({ name: 'John' }, ['age'])).toEqual({});
  });

  it('should return a filtered object', () => {
    expect(filterObject({ name: 'John', age: 20, location: 'USA' }, ['name', 'age']))
      .toEqual({ name: 'John', age: 20 });
  });
});
