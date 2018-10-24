
import { translatePigLatin } from './translatePigLatin';

/*
 * Translate a LOWERCASE sentence from SIMPLIFIED pig latin back to English and return the string.
 *
 * - A lowercase string is the ONLY valid argument
 * - Throw an error with the error message below if provided an invalid argument
 * - Use simplified pig latin (i.e. don't worry about consonant clusters and vowels)
 *
 * You can read about pig latin here: https://en.wikipedia.org/wiki/Pig_Latin
 *
 * Hint: Make use of String.replace() and Regular Expressions 😉
 */

describe(`translatePigLatin translates pig latin back to good ol' English! 🐷`, () => {

  const errorMsg = `Invalid argument 🐽`

  it('Make sure that invalid arguments throw error...', () => {
    expect(() => { translatePigLatin(null); }).toThrow(errorMsg);
    expect(() => { translatePigLatin(undefined); }).toThrow(errorMsg);
    expect(() => { translatePigLatin(''); }).toThrow(errorMsg);
    expect(() => { translatePigLatin(42); }).toThrow(errorMsg);
    expect(() => { translatePigLatin({}); }).toThrow(errorMsg);
    expect(() => { translatePigLatin([]); }).toThrow(errorMsg);
    expect(() => { translatePigLatin('Hacktoberfest 2018'); }).toThrow(errorMsg);
  });

  it('Testing translation...', () => {
    expect(translatePigLatin('ellohay orldway!')).toEqual('hello world!');
    expect(translatePigLatin('ancay igspay eallyray lyfay?')).toEqual('can pigs really fly?');
    expect(translatePigLatin('"inkoay inkoay", aidsay hetay igletpay')).toEqual('"oink oink", said the piglet');
    expect(translatePigLatin('acktoberfesthay 2018, eahyay! 🔥🔥🔥')).toEqual('hacktoberfest 2018, yeah! 🔥🔥🔥');
  });
});
