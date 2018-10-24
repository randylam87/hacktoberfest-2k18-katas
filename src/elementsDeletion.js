export const elementsDeletion = (arg1, arg2) => {
  let numberDeleted = 0

  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    arg1.forEach(element => {
      if (!(arg2.includes(element))) {
        numberDeleted++;
      }
    })
    return numberDeleted
  }
  else {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
      for (let i=0; i < arg1.length; i++) {
        let indexOfFirst = arg2.indexOf(arg1.charAt(i));
        if (indexOfFirst === -1) {
          numberDeleted++
        }
        else {
          arg2 = removeCharacter(arg2, indexOfFirst)
        }
      }
      return numberDeleted
    }
    else {
      throw new Error('missing Parameters, or parameters are not arrays nor strings')
    }
  }
};

const removeCharacter = (str, char_pos) => {
  let part1 = str.substring(0, char_pos);
  let part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}
