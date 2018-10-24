export const binToHex = (bin) => {
  bin += '';
  if (!/^(0|1)+$/.test(bin)) { throw new Error ('not a binary number')}
  return parseInt(bin, 2).toString(16);
};
