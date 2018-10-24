const extractNumberFromString = str => {
  const matchedNumber = str.match(/[0-9]+/);
  return (matchedNumber && matchedNumber[0]) || null;
};

const getStringWithoutNumber = (str, num) => {
  return str.replace(num, "");
};

const hasNumber = str => {
  return str.match(/[0-9]+/);
};

export const wordSort = str => {
  const tokenizedString = str.split(" ");

  if (!tokenizedString.every(hasNumber)) {
    return str;
  }

  const orderMapping = tokenizedString.reduce((acc, t) => {
    const number = extractNumberFromString(t);

    const cleanStrings = getStringWithoutNumber(t, number);
    return {
      ...acc,
      [number]: cleanStrings
    };
  }, {});

  const orderedCleanStrings = Object.keys(orderMapping)
    .sort()
    .map(idx => orderMapping[idx]);

  return orderedCleanStrings.join(" ");
};
