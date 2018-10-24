export const countMax = (numbers) => {
  if (!Array.isArray(numbers)) return 0;

  return numbers
    .reduce((store, item) => {
      store.counters[item] = (store.counters[item] || 0) + 1;
      if (item > store.max) store.max = item;
      store.result = store.counters[store.max];
      return store;
    }, {
      counters: {},
      max: -Infinity
    })
    .result || 0;
};
