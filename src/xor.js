export const xor = (a, b) => {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    [a, b].some(isNaN) ||
    [a, b].some(c => parseInt(c) !== c)
  ) {
    throw new Error();
  }
  return a ^ b;
};
