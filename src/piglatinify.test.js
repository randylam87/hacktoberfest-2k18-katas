import { piglatinify } from './piglatinify';


describe('piglatinify', () => {
  it('validates parameter is a string', () => {
    expect(() => piglatinify(1)).toThrow();
    expect(() => piglatinify({})).toThrow();
    expect(() => piglatinify([])).toThrow();
    expect(() => piglatinify(()=>{})).toThrow();
  });

  it('will move the first non-vowel to the end of a word and add "ay"', () => {
    let original="foo", expected="oofay";
    expect(piglatinify(original)).toEqual(expected);
  });

  it('will work on multiple words in a string', () => {
    let original = "foo bar baz";
    let expected = "oofay arbay azbay";
    expect(piglatinify(original)).toEqual(expected);
  });
});
