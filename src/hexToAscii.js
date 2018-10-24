export const hexToAscii = (hex) => {
  let result = hex.split(" ");
  result = result.map((char) => {
    char = parseInt(`0x${char}`);
    if(char > 31 && char < 127) {
      return String.fromCharCode(char);
    } 
  });
  result = result.join("");
  return result;
};