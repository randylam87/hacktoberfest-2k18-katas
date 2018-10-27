export const groupBy = (numbers, ...functions) => {
  if (numbers === undefined) {
    return {};
  }

  if (functions.length === 0) {
    return { [functions[0]]: numbers };
  } else {
    const obj = {};

    for (const func of functions) {
      for (const number of numbers) {
        if (!Array.isArray(obj[func(number)])) {
          obj[func(number)] = [number];
        } else {
          obj[func(number)].push(number);
        }
        console.log(obj);
      }
    }

    return obj;
  }
};
