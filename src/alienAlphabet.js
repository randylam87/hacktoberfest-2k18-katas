/**
 * An alphabet is an ordered set of characters that can be used to sort words. The alphabet used for English
 * is ABCDEFGHIJKLMNOPQRSTUVWXYZ. Given a list of sorted words, return one of the alphabets that may have been
 * used to sort it.
 * 
 * For example:
 * ['car', 'cat', bar', 'abc'] -> ['c', 'b', 'a', 'r']
 */

export const alienAlphabet = (words) => {
  var s;
  var results=[];
for (s of words) {
  for(var i=0;i<s.length;i++) {
	if(results.indexOf(s.charAt(i))==-1)
		results.push(s.charAt(i));
  }
}
  return results;
}
