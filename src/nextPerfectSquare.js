export const nextPerfectSquare = (num) => {
  if (num < 0) return 1;
  let nps = null;
  while (!nps) {
    const temp = ++num;
    if (temp > 0 && Math.sqrt(temp) % 1 === 0) nps = temp;
  }
  return nps;
};
