export const isPalindromicNumber = (n) => {
  if (isNaN(n) || !isFinite(n)) {
    throw 'Argument is not a finite number!';
  }
  const s = (+n + '').replace('.', '');
  return s.slice(0, s.length / 2) === s.split('').reverse().join('').slice(0, s.length / 2);
};
