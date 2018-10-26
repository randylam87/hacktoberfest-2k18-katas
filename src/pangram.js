export const pangram = string => {
  if (string == null || !string || typeof string === 'undefined') {
    throw 'Invalid Arugment';
  }
  let alphabet = 'abcdefghijklmnopqrstuvwxrz';
  let missingLetters = alphabet.split('').filter(letter => string.toLowerCase().indexOf(letter) === -1)
  return missingLetters.length === 0 ? true : false;
};
