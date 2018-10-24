export const dropRight = (array, n) => {
  let length = array == null ? 0 : array.length;
  if (!length) return [];

  //if undefined, set n to 1, else n
  n = (n === undefined) ? 1 : n;
  //if n is negative, set n to 0, else n
  n = n < 0 ? 0 : n;
  while(n>0){
    array.pop();
    n--;
  }
  return array;
};
