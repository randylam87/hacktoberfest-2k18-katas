const isPrime = n => {
  if (n <= 1) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i < limit + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export const isSexyPrime = n => {
  if (!n || !Number.isInteger(n)) {
    return false;
  }

  return isPrime(n - 6) || isPrime(n + 6);
};
