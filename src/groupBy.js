export const groupBy = (numbers, ...functions) => {
  const groupedNumbers = {};
  if (numbers === undefined) {
    return {};
  }

  if (functions.length === 0) {
    return { [functions[0]]: numbers };
  } else {
    while (functions.length) {
      if (JSON.stringify(Object.keys(groupedNumbers)) === "[]") {
        for (const number of numbers) {
          if (!Array.isArray(groupedNumbers[functions[0](number)])) {
            groupedNumbers[functions[0](number)] = [number];
          } else {
            groupedNumbers[functions[0](number)].push(number);
          }
        }
      } else {
        for (const key of Object.keys(groupedNumbers)) {
          groupedNumbers[key] = deeperGroupBy(groupedNumbers[key], functions);
        }
      }
      functions.shift();
    }
    return groupedNumbers;
  }
};

function deeperGroupBy(numbers, arrayOfFunctions) {
  const obj = {}
  if (JSON.stringify(Object.keys(obj)) === "[]") {
    for (const number of numbers) {
      if (!Array.isArray(obj[arrayOfFunctions[0](number)])) {
        obj[arrayOfFunctions[0](number)] = [number];
      } else {
        obj[arrayOfFunctions[0](number)].push(number);
      }
    }
  }
  return obj;
}