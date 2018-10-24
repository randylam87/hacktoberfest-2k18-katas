export const dateTimestamp = (date) => {
  const dt = new Date(date);
  if (!(dt instanceof Date) || isNaN(dt)) throw new Error('Invalid date');
  return dt.getTime();
};
