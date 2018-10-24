export const positiveAttitude = (text) => {

  if (!text) {
    return "Try again!";
  }

  text = text.replace(/no/ig, "Yes");
  text = text.replace("can't", "can");
  text = text.replace("n't", "")

  return text;
};
