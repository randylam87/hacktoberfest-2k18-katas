// Take an input string parameter and determine if exactly 3 question marks exist
// between every pair of numbers that add up to 10. If so, return true, otherwise
// return false.
//
// Assumes every valid number is between 0 and 10 (both inclusive)
export const questionsMarks = (str) => {
  if(typeof str !== 'string')
    throw new Error('Invalid argument: {}', str);

  let tracker = [...Array(str.length+1)]
  tracker[0] = 0;
  for (var i=0; i<str.length; i++)
    tracker[i+1] = tracker[i] + (str[i] === '?');

  let nums = {};
  i=0;
  for(var j=i; i<str.length;) {
    if(str[i] >= '0' && str[i] <= '9') {
      j = i+1;

      while(j<str.length && str[j] >= '0' && str[j] <= '9')
        j++;

      let num = parseInt(str.substring(i, j));

      if((10-num in nums) && (nums[10-num] < i) && (tracker[i+1] - tracker[nums[10-num] + 1] != 3))
          return false;

      nums[num] = i;
      i = j;

    } else
      i++;
  }

  return true;
};
