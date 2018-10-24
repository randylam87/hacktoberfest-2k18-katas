const OBJECT_LITERAL = 'object';
const LOVE_NOTES = ['i love you', 'i love u'];
const LOVE_ARRAY = ['I', 'love', 'you'];
const FIND_ARRAY = ['I', 'love', 'who'];
const isObject = (you) => typeof you === OBJECT_LITERAL;

const isArray = (you) => you && you.length !== undefined;

const validateString = (you) => LOVE_NOTES.includes(you.toLowerCase());

const isBoolean = (you) => you === true

const validateArray = (you, loveArr) => loveArr.every((love, place) => love === you[place]);

export const findYou = (you) => {
  if(you === null){
    return () => {throw new Error("No way")};
  } 
  else if (isBoolean(you)){
    return you
  }
  else{
    if(!you) return false;
    if(isObject(you)){
      if (isArray(you)){
        return  validateArray(you, LOVE_ARRAY) || validateArray(you, FIND_ARRAY);
      }
      return you.hasOwnProperty('iLove')
        ? you.iLove === 'you'
        : false;
    }
    else{
      return validateString(you);
    }
  }
};
