export const getLastLeapYear = (year) => {
  if (!year) {
    return null;
  }

  let fullYear;
  if (typeof year === "object" && year.constructor.name) {
    fullYear = year.getFullYear();
  }

  if (typeof year === "number") {
    fullYear = year;
  }

  for (let i = 4; i > 0; --i) {
    fullYear = fullYear - 1;
    if (fullYear % 4 === 0) {
      return fullYear;
    }
  }
};
