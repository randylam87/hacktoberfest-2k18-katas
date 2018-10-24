import { groupObjectsByKey } from './groupObjectsByKey';

describe('groupObjectsByKey groups objects by provided key', () => {
  const testObject = {
    'userA': {
      age: 18,
      country: 'CA',
    },
    'userB': {
      age: 22,
      country: 'US',
    },
    'userC': {
      age: 18,
      country: 'CA',
    },
    'userD': {
      age: 25,
      country: 'CA',
    },
    'userE': {
      age: 22,
      country: 'FR',
    },
  };

  it('groupObjectsByKey works with numeric keys', () => {
    expect(groupObjectsByKey(testObject, 'age')).toEqual({
      18: {
        'userA': {
          age: 18,
          country: 'CA',
        },
        'userC': {
          age: 18,
          country: 'CA',
        },
      },
      22: {
        'userB': {
          age: 22,
          country: 'US',
        },
        'userE': {
          age: 22,
          country: 'FR',
        },
      },
      25: {
        'userD': {
          age: 25,
          country: 'CA',
        },
      }
    });
  });

  it('groupObjectsByKey works with alphabetic character keys', () => {
    expect(groupObjectsByKey(testObject, 'country')).toEqual({
      'CA': {
        'userA': {
          age: 18,
          country: 'CA',
        },
        'userC': {
          age: 18,
          country: 'CA',
        },
        'userD': {
          age: 25,
          country: 'CA',
        },
      },
      'US': {
        'userB': {
          age: 22,
          country: 'US',
        },
      },
      'FR': {
        'userE': {
          age: 22,
          country: 'FR',
        },
      },
    });
  });

  it('groupObjectsByKey throws error if key is missing', () => {
    expect(() => { groupObjectsByKey(testObject); }).toThrow();
  });

  it('groupObjectsByKey throws error if object is missing', () => {
    expect(() => { groupObjectsByKey(); }).toThrow();
  });
});
