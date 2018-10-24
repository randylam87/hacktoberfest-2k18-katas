export const poundsToKilogram = (pounds) => {
  if (typeof pounds !== 'number') {
    throw new Error('Pounds must be a number');
  }
  return Number((pounds * 0.45359237).toFixed(2));
};
