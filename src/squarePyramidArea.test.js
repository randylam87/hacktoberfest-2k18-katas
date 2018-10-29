import { squarePyramidArea } from './squarePyramidArea';

describe('squarePyramidArea', () => {
  it('Height: 4 units, Edge of Square: 6 units should have the area of 96 units', () => {
    expect(squarePyramidArea(4, 6)).toBe(96);
  });

  it('Should throw error if there is no height', () => {
    expect(() => squarePyramidArea(4)).toThrow();
  });

  it('Should throw error if there is no edge', () => {
    expect(() => squarePyramidArea(null, 6)).toThrow();
  });
});
