export const parenthesisMatcher = (str) => {
  let leftParens = 0;
  let rightParens = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === '(') {
      leftParens++;
    } else if (char === ')') {
      rightParens++;
    }
    if (leftParens === rightParens) {
      return leftParens + rightParens;
    }
  }
  return rightParens;
};
