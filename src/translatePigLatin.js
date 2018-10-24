
export const translatePigLatin = (str) => {
  // "When people are taking something extremely seriously,
  //  that's the time to take out the pig's bladder."
  //                                         - John Lithgow
  const errorMsg = `Invalid argument 🐽`

  if (!str) {
    throw errorMsg 
  }

  if (!(str === String(str).toLowerCase())) {
    throw errorMsg
  }

  return str.split(" ").map(s => translator(s)).join(" ")
};

const translator = (str) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  let letters = str.split("").filter(char => abc.includes(char)).join("")

  if (letters) {
    let translated = letters.substring(letters.length - 3)[0] + letters.substring(0, letters.length - 3) 

    return str.replace(letters, translated) 
  } else {
    return str
  }
}
