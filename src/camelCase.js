export const camelCase = (str) => {
  const split = str.split(' ');
  if (split.length <= 1) throw("Can't convert single word to camel case");
  return split.map(word => word[0].toUpperCase() + word.substr(1)).join('');
};
