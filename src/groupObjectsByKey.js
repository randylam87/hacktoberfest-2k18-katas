export const groupObjectsByKey = (object, key) => {
  if (object === undefined || object === null) {
    throw "Invalid object parameter";
  }

  if (key === undefined || key === null) {
    throw "Invalid key parameter";
  }

  const result = {};

  Object.keys(object).forEach((child) => {
    const value = object[child];
    const newKey = value[key];

    if (!result.hasOwnProperty(newKey)) {
      result[newKey] = {}
    }

    result[newKey][child] = value;
  });

  return result;
};
