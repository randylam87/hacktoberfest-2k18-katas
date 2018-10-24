let range = (start, end) => Array.from(Array(end + 1).keys()).slice(start);

const isOdious = (n) => {
  return n.toString(2).replace(/0/g, "").length % 2;
}

export const odiousNumbers = (a, b) => {
  return range(a, b).filter(e => isOdious(e));
};
