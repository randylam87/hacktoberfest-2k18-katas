export const isUSPostalCode = (input) => {
  const regxp = /^\d{5}$|^\d{5}-\d{4}$/;
  return regxp.test(input);
}
