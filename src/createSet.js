export const createSet = (set1, set2) => {
  return set1.concat(set2).sort().reduce(
    (agg, i) => {
      if(agg[agg.length - 1] !== i) {
        agg.push(i);
      }

      return agg;
    },
    []
  );
};
