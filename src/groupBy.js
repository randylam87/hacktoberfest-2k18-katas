export const groupBy = (numbers, ...functions) => {
  const obj = {};
  if (numbers === undefined) {
    return {};
  }

  if (functions.length === 0) {
    return { [functions[0]]: numbers };
  } else {
    while (functions.length) {
      if (JSON.stringify(Object.keys(obj)) === "[]") {
        for (const number of numbers) {
          if (!Array.isArray(obj[functions[0](number)])) {
            obj[functions[0](number)] = [number];
          } else {
            obj[functions[0](number)].push(number);
          }
        }
        console.log(obj);
      } else {
        console.log(Object.keys(obj));
        for (const key of Object.keys(obj)) {
          console.log(obj[key]);
          console.log(functions);
          obj[key] = groupBy(obj[key], functions);
        }
      }
      functions.shift();
    }
    console.log(obj);
    return obj;
  }
};
