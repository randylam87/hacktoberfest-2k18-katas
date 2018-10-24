export const getInterval = (range, step = 1) => {
  let result = [];

  if(!range || !range.length) return result;

  const startType = range.charAt(0);
  const endType = range.charAt(range.length - 1);
  if (['[', '('].indexOf(startType) < 0 || [']', ')'].indexOf(endType) < 0) {
    throw('Check range definition.');
  }

  const regex = /[[(]|[)]]|\s/gi; // regex matches brackets and whitespace characters
  const [start, end] = range.replace(regex, '')
    .split(',')
    .map((n) => parseInt(n, 10));

  if (startType === '[') {
    result = [start];
  }

  let intervalValue;
  if (start <= end) {
    intervalValue = (start + step);
    while (intervalValue < end) {
      result = [...result, intervalValue];
      intervalValue += step;
    }
  } else {
    intervalValue = (start - step);
    while (intervalValue > end) {
      result = [...result, intervalValue];
      intervalValue -= step;
    }
  }

  if(endType === ']' && result[result.length - 1] !== end) {
    result = [...result, end];
  }

  return result;
};
