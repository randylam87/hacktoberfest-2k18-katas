import { camelCase } from './camelCase';

describe('camelCase', () => {
  it('camelCase remoes all spaces and adds a capital to the beginning of the sentence', () => {
    expect(camelCase("hello world")).toEqual("HelloWorld");
    expect(camelCase("hacktoberfest rocks")).toEqual("HacktoberfestRocks");
    expect(camelCase("this is a large test")).toEqual("ThisIsALargeTest");
    expect(() => { camelCase("one"); }).toThrow("Can't convert single word to camel case");
  });
});
