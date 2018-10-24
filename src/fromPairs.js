let assert = (condition) => {
  if (!condition) {
    throw new Error("unexpected behavior in 'fromPairs.js'");
  }  
}
export const fromPairs = (pairs = []) => {
  assert(Array.isArray(pairs));
  return pairs.reduce((prev, curr) => {
    assert(Array.isArray(curr));
    assert(curr.length === 2);
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
};