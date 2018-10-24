export const maskDebitCard = cardNumber => {
  if (!cardNumber) throw new Error("No debit card number provided.");
  if (cardNumber.length < 16) return cardNumber;

  return cardNumber.replace(/^[0-9]{12}/, "############");
};
