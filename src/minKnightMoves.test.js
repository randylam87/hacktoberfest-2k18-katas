import { minKnightMoves } from './minKnightMoves';

/*
 * Given a starting square and ending square on an 8x8 chessboard, the goal is to calculate
 * the minimum number of moves a Knight must make to reach the ending square from the starting square.
 *
 * On how a Knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29#Movement
 * Coordinates are given in algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_(chess)#Naming_the_squares
 */

describe('knightMoves', () => {
  it('should return the minimum number of knight moves', () => {
    expect(minKnightMoves('e4', 'e4')).toBe(0);
    expect(minKnightMoves('a1', 'b3')).toBe(1);
    expect(minKnightMoves('d6', 'c8')).toBe(1);
    expect(minKnightMoves('f5', 'e2')).toBe(2);
    expect(minKnightMoves('c2', 'g4')).toBe(2);
    expect(minKnightMoves('d4', 'h5')).toBe(3);
    expect(minKnightMoves('b7', 'b6')).toBe(3);
    expect(minKnightMoves('e8', 'c6')).toBe(4);
    expect(minKnightMoves('a3', 'f4')).toBe(4);
    expect(minKnightMoves('g1', 'g8')).toBe(5);
    expect(minKnightMoves('h7', 'c1')).toBe(5);
    expect(minKnightMoves('h1', 'a8')).toBe(6);
  });

  it('should throw on invalid inputs', () => {
    expect(() => minKnightMoves()).toThrow();
    expect(() => minKnightMoves(1, 'b2')).toThrow();
    expect(() => minKnightMoves('e5')).toThrow();
    expect(() => minKnightMoves('a9', 'f5')).toThrow();
    expect(() => minKnightMoves('g3', 'i4')).toThrow();
  });
});
