export const isAutomorphic = (param) => {
  if (Number.isInteger(param)) {
    let digitNumber = param.toString().length;
    if ((param*param % (Math.pow(10, digitNumber))) === param) {
      return('Automorphic')
    }
    else {
      return('Not automorphic')
    }
  } else {
    throw new Error('invalid parameter')
  }
};
