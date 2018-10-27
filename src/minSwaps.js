export const minSwaps = (values) => {
  let valuesSorted = JSON.parse(JSON.stringify(values));
  valuesSorted.sort();

  let max = valuesSorted.length;

  let swaps = 0;

  for (let i = 0; i < max; i++) {
    if (values[i] === valuesSorted[i]) {
      continue;
    }
    let wrongIndex = values.indexOf(valuesSorted[i]);
    let wrongValue = values[i];

    values[wrongIndex] = wrongValue;
    values[i] = valuesSorted[i];
    swaps++;

    if (valuesSorted === values) {
      break;
    }
  }

  return swaps;
};