export const inchesToCentimeters = (num) => {
  if (!Number.isFinite(num)) throw new Error('Invalid argument.');
  return Number.parseFloat((num * 2.54).toFixed(2));
}
