import { vigenereCipher } from './vigenereCipher';

describe('vigenereCipher', () => {
  it('vigenere cipher simple test', () => {
    expect(vigenereCipher('ABC', 'B')).toEqual('BCD')
  });

  it('vigenere cipher extended test', () => {
    expect(vigenereCipher('ATTACKATDAWN', 'LEMON')).toEqual('LXFOPVEFRNHR')
  });

  it('vigenere cipher rotated', () => {
    expect(vigenereCipher('HACKTOBERFEST', 'CODE')).toEqual('JOFOVCEITTHWV')
  });
});
