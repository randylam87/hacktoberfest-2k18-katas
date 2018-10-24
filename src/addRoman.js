export const addRoman = (numbers) => {
  var ints = [];
  var t = true;

  `${numbers}`.split(' ').forEach((num) => {
    var b = romanToInt(num.toUpperCase());
    if (b != -1 && /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(num.toUpperCase())) {
      ints.push(b);
    } else {
      t = false;
    }
  })

  if (!t) return null;

  var res = ints.reduce((total, num) => {
    return total + num;
  }, 0);

  return intToRoman(res);
};

function romanToInt(str1) {
  if (str1 == null) return -1;
  var num = charToInt(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function charToInt(c) {
  switch (c) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
}

function intToRoman(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = '',
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
