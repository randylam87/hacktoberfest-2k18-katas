import { addRoman } from './addRoman';

describe('addRoman', () => {
  it('adds numbers correctly', () => {
    expect(addRoman("II III")).toEqual("V")
    expect(addRoman("XXV XL")).toEqual("LXV")
    expect(addRoman("MDCLXVI CCXXXIV")).toEqual("MCM")
  });
  it('accepts any number of roman numerals', () => {
    expect(addRoman("V")).toEqual("V")
    expect(addRoman("V I VIII")).toEqual("XIV")
    expect(addRoman("VIII II IX I")).toEqual("XX")
    expect(addRoman("IX VIII VII VI V IV III")).toEqual("XLII")
  });
  it('accepts lower case but returns upper case', () => {
    expect(addRoman("iv iii")).toEqual("VII")
    expect(addRoman("l v vi")).toEqual("LXI")
    expect(addRoman("cxxii civ")).toEqual("CCXXVI")
  });
  it('rejects alternative forms', () => {
    expect(addRoman("IIII V")).toBeNull();
    expect(addRoman("IIXX")).toBeNull();
  });
  it('rejects meaningless data', () => {
    expect(addRoman("")).toBeNull();
    expect(addRoman(62)).toBeNull();
    expect(addRoman("Roman numerals are great!")).toBeNull();
    expect(addRoman("0x57")).toBeNull();
  });
});