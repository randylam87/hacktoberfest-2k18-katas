// You need to write a function that accepts other functions and invokes them in a sequence.
// Each function is invoked after the previos one finishes.
//
// Each function passed to syncAsync can be synchronious or asynchronious.
// It can invoked with a callback as first parameter.

const queue = [];
const cb = () => queue.shift() && queue.length > 0 && queue[0](cb);

export const syncAsync = (func) => {
  queue.push(func) && queue.length === 1 && queue[0](cb);
};
