/**
 * A function to chekc if a given word is or not palindrome (is the same spelled backwards)
 * @param {String} str the word to check
 * @return {Boolean} if the `str` is palindrome or not.
 */
export const palindrome = str => {
  if (typeof str === 'string') {
    const words = str.split(/\W/g).join('')
    const reversed = words
      .split('')
      .reverse()
      .join('')
    return reversed === words
  } else {
    return () => {throw 'only strings can be palindrome'}
  }
}
