export const allOfConditions = (...args) => {
  const conditions = args
  return (input) => conditions.reduce((previousValue, checkCondition) => {
    if(!previousValue) {
      return false
    }

    return checkCondition(input)

  }, true)
};
