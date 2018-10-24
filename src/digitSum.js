export const digitSum = (value) => {
  // TO IMPLEMENT IN ANOTHER PR
  value = '' + value;
  if (value.indexOf('-') !== -1) {
    throw ('Negative Numbers not supported')
  }
  let digitSum = 0;
  let firstDigit = parseInt(value[0], 10)
  for (let i = 0; i < value.length; i++) {
    digitSum += parseInt(value[i], 10);
  }
  if ((firstDigit * value.length) === digitSum) {
    //repeated numbers
    return firstDigit;
  }
  return digitSum;

};
