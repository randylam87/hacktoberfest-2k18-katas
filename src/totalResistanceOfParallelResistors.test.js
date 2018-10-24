import { totalResistanceOfParallelResistors } from './totalResistanceOfParallelResistors';

describe('totalResistanceOfParallelResistors', () => {
  it('should calculate the total resistance of parallel connected resistors...', () => {
    expect(totalResistanceOfParallelResistors(100, 100)).toEqual(50);
    expect(totalResistanceOfParallelResistors(200, 470, 220)).toEqual(85.67);
    expect(totalResistanceOfParallelResistors(1000, 1000, 470, 100, 100)).toEqual(43.05);
    expect(totalResistanceOfParallelResistors(100, 200, 300, 400, 500, 600, 700, 800)).toEqual(36.79);
  });

  it('should validate the input', () => {
    expect(() => { totalResistanceOfParallelResistors(); }).toThrow();
    expect(() => { totalResistanceOfParallelResistors("TestString"); }).toThrow();
    expect(() => { totalResistanceOfParallelResistors(2, 2, "String"); }).toThrow();
    expect(() => { totalResistanceOfParallelResistors([], [], 2); }).toThrow();
  });
});
