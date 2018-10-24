export const findDigitalRoot = (n) => {
  if (!+n) {
    return () => {
      throw new Error();
    };
  }

  var a = `${n}`.split(''),
    r = 0;

  while (a.length > 1) {
    var s = 0;
    a.forEach(v => s += +v);
    r = s, a = `${s}`.split('');
  }

  return r;
};
