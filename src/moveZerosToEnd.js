export const moveZerosToEnd = (arr) => {
  const array = arr;
  if(Array.isArray(array)) {
    if(array.length > 0) {
      let zeroes = 0;
      const result = array.filter(ele => {
        if(ele === 0)
          zeroes++;
        return ele !== 0;
      })
      return result.concat(Array(zeroes).fill(0))
    } else {
      return () => {throw "Array is empty";}
    }
  } else {
    return () => {throw "type not allowed";}
  }
};
