//FORMULA: Math.pow(base, 2) + 2 * base * Math.sqrt((Math.pow(base, 2)/4) + Math.pow(height,2))
export const squarePyramidArea = (height, base) => {
  if (isNotValid(height) || isNotValid(base))
    throw warning(height ? 'Edge' : 'Height');
 
  const root = Math.sqrt(oneFourth(squared(base)) + squared(height));
  return squared(base) + double(base) * root;
};

const isNotValid = param => param === 'null' || typeof param !== 'number';
const warning = about => `${about} must be specified and be a number.`;

const times = multiplier => number => number * multiplier;
const double = times(2);
const oneFourth = times(1 / 4);
const squared = number => times(number)(number);
