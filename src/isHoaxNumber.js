const getPrimeFactors = (n) => {
  let factors = [];

  // Check if 2 is a factor
  if (n % 2 === 0) {
    while (n % 2 === 0) {
      n = parseInt(n / 2);
    }
    factors.push(2);
  }

  // Check for other prime factors except 2
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      while (n % i === 0) {
        n = parseInt(n / i);
      }
      factors.push(i);
    }
  }

  if (n > 2) {
    factors.push(n)
  }

  return factors;
}


export const isHoaxNumber = (n) => {
  if (typeof (n) !== 'number' || n === undefined) {
    throw new Error('No input provided.');
  }

  let primeFactors = getPrimeFactors(n);

  // If n is a prime number, it cant be a hoax number
  if (primeFactors[0] === n) {
    return false;
  }

  // Sum of all distinct prime factors
  let sumOfPFs = 0;
  for (let i = 0; i < primeFactors.length; i++) {
    // Sum of digits in prime factor
    let pf_sum = 0;
    while (primeFactors[i] > 0) {
      pf_sum += primeFactors[i] % 10;
      primeFactors[i] = parseInt(primeFactors[i] / 10);
    }
    sumOfPFs += pf_sum;
  }

  // sum of digits of number
  let sumOfDigitsOfNumber = 0;
  while (n > 0) {
    sumOfDigitsOfNumber += n % 10;
    n = parseInt(n / 10);
  }

  return sumOfDigitsOfNumber === sumOfPFs;
};
