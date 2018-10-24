import { questionsMarks } from './questionsMarks';

describe('questionsMarks', () => {
  it('Should return false or true with valid args ', () => {
    expect(questionsMarks('arrb6???4xxbl5???eee5')).toBeTruthy(); // => true
    expect(questionsMarks('acc?7??sss?3rr1??????5')).toBeTruthy(); // => true
    expect(questionsMarks('5??aaaaaaaaaaaaaaaaaaa?5?5')).toBeFalsy(); // => false
    expect(questionsMarks('9???1???9???1???9')).toBeTruthy(); // => true
    expect(questionsMarks('aa6?4')).toBeFalsy(); // => false
  });

  it('should throw with invalid arg', () => {
    expect(() => questionsMarks()).toThrow();
  });
});
