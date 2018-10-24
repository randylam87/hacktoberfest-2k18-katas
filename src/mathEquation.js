/**
 * You are required to validate a math equation of the form "a operator b = c", you may use the function of basicMath.js
 * Things to point out: valid operators: "+"/"-"/"*"/"/"
 * Usage of floating numbers should be possible, for example "1.1+2=3.1" but you need to pay attention to the location of the dot,
 * for example equations of such as "1.0.0+3=4" or "1..0+2=3" are invalid, although ".5+1=1.5" and "10.+3=13" should be valid
 */

export const mathEquation = (equation) => {
  if (!equation || equation === "" || typeof equation !== "string") {
    return false;
  }

  const sides = equation.split("=");
  const leftHandSide = sides[0];
  const rightHandSide = sides[1];

  let leftHandSideEquation;
  let rightHandSideEquation;
  try {
    leftHandSideEquation = operator(leftHandSide);
    rightHandSideEquation = operator(rightHandSide);
  } catch (error) {
    return false;
  }

  const leftHandSideValue = leftHandSideEquation.substring(0, leftHandSideEquation.length - 1);
  const rightHandSideValue = rightHandSideEquation.substring(0, rightHandSideEquation.length - 1);

  return eval(leftHandSideValue) === eval(rightHandSideValue);
}

const flatten = (collection) => collection.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next));

const operator = (expression, remainingOperations = ["+", "-", "*", "/"]) => {
  const [operation, ...rest] = remainingOperations;

  return flatten(expression.split(operation).map(element => {
    if (element.indexOf("+") === -1 && element.indexOf("-") === -1 && element.indexOf("*") === -1 && element.indexOf("/") === -1) {
      return `${fillFloat(element)}${operation}`;
    }

    return operator(element, rest);
  }))
}

const fillFloat = (value) => {
  const destructuredFloat = value.split(".");
  let beforeDecimal = destructuredFloat[0];
  let afterDecimal = destructuredFloat[1];
  if (destructuredFloat.length > 2) {
    throw "Invalid float format";
  }

  if (!beforeDecimal) {
    beforeDecimal = "0";
  }

  if (!afterDecimal) {
    afterDecimal = "0";
  }

  return `${beforeDecimal}.${afterDecimal}`;
}
