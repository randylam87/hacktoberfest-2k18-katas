export var isPalindromeStringOrNumber = (stringOrNum, nullArg = null) => {
  // TO IMPLEMENT IN ANOTHER PR
  if (!stringOrNum || typeof stringOrNum === "object" || nullArg) throw new Error('Argument is not string or number.');
  let reverseString = String(stringOrNum).split('').reverse().join('')
  return reverseString === String(stringOrNum) ? true : false
};
