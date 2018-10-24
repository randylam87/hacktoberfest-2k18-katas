/**
 * A function to transform numbers into money format using `$` as the money symbol
 * and adding commas as thousand separators for big numbers and always return
 * rounded up decimals, ie: 2.213 -> 2.22 // instead of 2.21
 *
 * @param {Number} input the number we want to format as Money
 * @return {String} a string with the format '$xxx,xxx.xx`
 */
export const moneyPrint = input => {
  if (typeof input === 'number') {
    // fix it to 3, in order to check for round ups
    const numericString = input.toFixed(3)
    let number = 0
    // if the last number is 0, it means it was only two decimals at the begining
    if (numericString.endsWith(0)) {
      number = Number(numericString)
    } else {
      const lastNumberIndex = numericString.length - 1
      const subst = [...numericString]
        // replace the last index to a 9 to force the round up
        .map((d, i) => (i === lastNumberIndex ? 9 : d))
        .join('')
      number = Number(Number(subst).toFixed(2))
    }
    return number.toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
      useGrouping: true,
    })
  } else {
    // IDKW it was execting to return a function that throws
    return () => {
      throw 'type not allowed'
    }
  }
}
