import { isSexyPrime } from "./isSexyPrime";

describe("isSexyPrime", () => {
  it("isSexyPrime returns", () => {
    expect(isSexyPrime()).toBeFalsy();
    expect(isSexyPrime(null)).toBeFalsy();
    expect(isSexyPrime([])).toBeFalsy();
    expect(isSexyPrime(6)).toBeFalsy();
  });

  it("isSexyPrime returns false for primes that are not sexy", () => {
    expect(isSexyPrime(3)).toBeFalsy();
    expect(isSexyPrime(71)).toBeFalsy();
    expect(isSexyPrime(139)).toBeFalsy();
  });

  it("isSexyPrime returns true for sexy primes", () => {
    expect(isSexyPrime(5)).toBeTruthy();
    expect(isSexyPrime(13)).toBeTruthy();
    expect(isSexyPrime(17)).toBeTruthy();
    expect(isSexyPrime(73)).toBeTruthy();
    expect(isSexyPrime(131)).toBeTruthy();
    expect(isSexyPrime(167)).toBeTruthy();
  });
});
