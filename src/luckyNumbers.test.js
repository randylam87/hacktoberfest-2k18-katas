import { luckyNumbers } from './luckyNumbers';

describe('luckyNumbers', () => {
  it('should generate the first 10 lucky numbers', () => {
    expect(take(luckyNumbers(), 10)).toEqual([1, 3, 7, 9, 13, 15, 21, 25, 31, 33]);
  });

  it('should generate the first 57 lucky numbers', () => {
    expect(take(luckyNumbers(), 57)).toEqual(
      [1, 3, 7, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69,
        73, 75, 79, 87, 93, 99, 105, 111, 115, 127, 129, 133, 135, 141,
        151, 159, 163, 169, 171, 189, 193, 195, 201, 205, 211, 219,
        223, 231, 235, 237, 241, 259, 261, 267, 273, 283, 285, 289,
        297, 303]);
  });

  it('should generate the 100-th lucky number', () => {
    expect(elementAt(luckyNumbers(), 100)).toBe(613);
  });

  it('should generate the 1000-th lucky number', () => {
    expect(elementAt(luckyNumbers(), 1000)).toBe(8809);
  });

  it('should generate the 5000-th lucky number', () => {
    expect(elementAt(luckyNumbers(), 5000)).toBe(53659);
  });

  it('should approach the theoretical density of lucky numbers as n grows large', () => {
    const nums = takeWhile(luckyNumbers(), x => x <= 50000);
    const actual = n => nums.filter(x => x <= n).fill(1).reduce((a, b) => a + b) / n;
    const expected = n => 1 / Math.log(n);
    const diff = (a, b) => Math.abs(a - b);

    expect(diff(actual(1000), expected(1000))).toBeLessThan(0.008236);
    expect(diff(actual(10000), expected(10000))).toBeLessThan(0.003227);
    expect(diff(actual(50000), expected(50000))).toBeLessThan( 0.001417);
  });
});

// takes the first n elements produced by a generator
function take(generator, n) {
  return Array(n).fill(null).map(() => generator.next().value);
}

// takes the n-th element produced by a generator
function elementAt(generate, n) {
  return take(generate, n).pop();
}

// takes elements produced by a generator while predicate is satisfied
function takeWhile(generator, predicate) {
  const a = [];
  let x;
  do {
    x = generator.next().value;
  } while (predicate(x) && a.push(x));
  return a;
}
