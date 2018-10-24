export const dateInUTC = (date) => {
  if (!date) throw new Error('Argument must be a date.');
  return date.toISOString().substring(0, 10);
};
