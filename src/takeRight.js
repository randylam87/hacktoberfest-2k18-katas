/*
* Returns an array/string with n elements removed from the end while still keep the order. Default take 1 if no provide any number to take.
* EG 1: takeRight( [1,2,3,4,5,6], 5 ) -> [2,3,4,5,6]
* EG 2: takeRight( "HACK", 3 ) -> "ACK"
*/
export const takeRight = (arr, n = 1) => {
  let collection = arr;
  if (typeof arr === "string") {
    collection = arr.split("");
  }

  let result = [];

  for (let i = 0; i < n; ++i) {
    result.push(collection.pop());
  }

  result = result.reverse();

  if (typeof arr === "string") {
    return result.join("");
  }

  return result;
};
