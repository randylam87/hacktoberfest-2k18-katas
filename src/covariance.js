export const covariance = (xArr = [], yArr = []) => {
  /* Validate params */
  if (!Array.isArray(xArr) || !Array.isArray(yArr)) {
    throw Error('Value must be array');
  }

  const xLen = xArr.length;
  const yLen = yArr.length;

  if (xLen < 1 || yLen < 1) {
    throw Error('Array must be non-empty');
  }

  const xAvg = average(xArr, xLen);
  const yAvg = average(yArr, yLen);

  let total = 0;
  for (var i = 0; i < xLen; i++) {
    total += (xArr[i] - xAvg) * (yArr[i] - yAvg);
  }

  return +(total/(xLen - 1)).toFixed(2);
};

function average(num, len) {
  let total = 0;
  for (var i = 0; i < len; i++) {
    total += num[i];
  }
  return (total/len);
}
