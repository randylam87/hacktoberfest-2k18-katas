export function pickPeaks(arr) {
  console.log(arguments, 'args...');

  if (
    arguments === {} || arguments[0] === null ||
    arguments[0] === undefined ||
    (
      arguments[0] instanceof Array &&
      (arguments[0].length === 0 || arguments[0].includes(true) || arguments[0].some(e => typeof (e) === 'string'))
    )
  ) {
    throw new Error('Invalid args')
  }

  let array;
  if (!(arguments[0] instanceof Array)) {
    array = Object.values(arguments)
  } else {
    array = arr;
  }

  if (new Set(array).size === array.length) {
    throw new Error('invalid args')
  }

  var pos = array.map((x, i) => i > 0 ? Math.sign(x - array[i - 1]) * i : 0)
    .filter(i => i != 0)
    .filter((x, i, a) => i < a.length - 1 && (a[i + 1] < 0 && x > 0));
  return {
    pos: pos,
    peaks: pos.map(i => array[i])
  }
}
