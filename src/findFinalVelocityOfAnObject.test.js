import { findFinalVelocityOfAnObject as findVFinal } from './findFinalVelocityOfAnObject';

describe('findFinalVelocityOfAnObject', () => {
  it('F = 3N, t=300ms w = 300g, v = 3m/s should have 6m/s as final speed.', () => {
    expect(findVFinal("3N", "300ms", "300g", "3m/s")).toBe("6m/s");
  });

  it('F = 3N, t=3s w = 1kg, v = 3m/s should have 12m/s as final speed.', () => {
    expect(findVFinal("3N", "3s", "1kg", "3m/s")).toBe("12m/s");
  });

  it('F = 13N, t=7s w = 1kg, v = 13.37km/h should have 94.71m/s as final speed.', () => {
    expect(findVFinal("13N", "7s", "1kg", "13.37m/s")).toBe("94.71m/s");
  });

  it('F = 10N, t=1s w = 100kg, v = 0.2m/s should have 0.3m/s as final speed.', () => {
    expect(findVFinal("10N", "1s", "100kg", "0.2m/s")).toBe("0.2m/s");
  });

  it('Not having F should throw "Force is required"', () => {
    expect(() => findVFinal(null, "300ms", "300g", "3m/s")).toThrow("Force is required");
  });

  it('Not having w should throw "Weight is required"', () => {
    expect(() => findVFinal("3N", "300ms", null, "3m/s")).toThrow("Weight is required");
  });

  it('Not having t should throw "Time is required"', () => {
    expect(() => findVFinal("3N", null, "300g", "3m/s")).toThrow("Time is required");
  });

  it('Not having v should throw "Initial Velocity is required"', () => {
    expect(() => findVFinal("3N", "300ms", "300g", null)).toThrow("Initial Velocity is required");
  });
});
