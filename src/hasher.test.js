import { hasher } from './hasher';

describe('hasher', () => {
    it('a-z = 1-26, returns the sum of all letters in a word. If more than one word is passed in then the sum of each word is multiplied', () => {
        expect(hasher('a')).toEqual(1);
        expect(hasher('abc')).toEqual(6);
        expect(hasher('hello world')).toEqual(3744);
        expect(hasher('ac b')).toEqual(8);
    });
})
