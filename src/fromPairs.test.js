import { fromPairs } from "./fromPairs";

describe("fromPairs", () => {

  it("should throw error on invalid parameters", () => {
    expect(() => fromPairs([['a', 1, 3]])).toThrow();
    expect(() => fromPairs(' ')).toThrow();
    expect(() => fromPairs(null)).toThrow();
    expect(() => fromPairs(1)).toThrow();
    expect(() => fromPairs({})).toThrow();
  });

  it("return an empty object if has no pairs", () => {
    const pairs = [];
    expect(fromPairs(pairs)).toEqual({});
  });

  it("should map the key-value pairs to an object", () => {
    const pairs = [['a', 2], ['b', 4]];

    expect(fromPairs(pairs)).toEqual({ a: 2, b: 4 });
  });

});
