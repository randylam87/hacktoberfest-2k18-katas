import { humanReadableDuration } from "./humanReadableDuration";

/*
 * Write a function that accepts a non-negative integer,
 * interprets it as a number of seconds and returns the duration
 * in a human-readable format.
 *
 * Units in the returned value should be (in order):
 * "years", "days", "hours", "minutes" and "seconds"
 *
 * Return "now" for input equal to 0.
 *
 * Separate units with a comma and a space (", ") except for the last unit,
 * which should be separated with " and " - check out the test cases for examples.
 */

describe("humanReadableDuration", () => {
  it("humanReadableDuration formats basic input", () => {
    expect(humanReadableDuration(0)).toEqual("now");
    expect(humanReadableDuration(10)).toEqual("10 seconds");
    expect(humanReadableDuration(120)).toEqual("2 minutes");
    expect(humanReadableDuration(3600)).toEqual("1 hour");
    expect(humanReadableDuration(259200)).toEqual("3 days");
    expect(humanReadableDuration(252288000)).toEqual("8 years");
  });

  it("humanReadableDuration formats complex input", () => {
    expect(humanReadableDuration(72001)).toEqual("20 hours and 1 second");
    expect(humanReadableDuration(252288600)).toEqual("8 years and 10 minutes");
    expect(humanReadableDuration(123456789)).toEqual(
      "3 years, 333 days, 21 hours, 33 minutes and 9 seconds"
    );
    expect(humanReadableDuration(252295220)).toEqual(
      "8 years, 2 hours and 20 seconds"
    );
  });

  it("humanReadableDuration handles invalid input", () => {
    expect(() => humanReadableDuration()).toThrow();
    expect(() => humanReadableDuration("test")).toThrow();
    expect(() => humanReadableDuration(123.456)).toThrow();
    expect(() => humanReadableDuration(-987)).toThrow();
    expect(() => humanReadableDuration(false)).toThrow();
  });
});
