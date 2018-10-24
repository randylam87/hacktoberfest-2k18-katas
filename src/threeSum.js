export const threeSum = (arr, target) => {
  if (arr.length < 3 || !+target) {
    return () => {
      throw new Error();
    };
  }

  arr = arr.sort((a, b) => {
    return a - b;
  });

  var result = [];

  for (var i = 0; i < arr.length - 2; i++) {
    if (i === 0 || arr[i] > arr[i - 1]) {
      var j = i + 1;
      var k = arr.length - 1;

      while (j < k) {
        var sum = arr[i] + arr[j] + arr[k];
        if (sum === target) {
          result.push([arr[i], arr[j], arr[k]]);
          j++;
          k--;

          while (j < k && arr[j - 1] === arr[j]) {
            j++;
          }

          while (j < k && arr[k + 1] === arr[k]) {
            k--;
          }
        } else if (sum < target) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  result = result.filter((a) => {
    if (!a.some(v => v === 0)) return a;
  })
  var res = result.length == 2 ? result[1] : result[0];
  return result.length > 0 ? res.sort((a, b) => {
    if (res.some(v => v < 0)) {
      return b - a;
    } else {
      return a - b;
    }
  }) : null;
};
