export const vigenereCipher = (text, key) => {

	let ciphertext = "";

	//Use two letters of every pair to calculate cipherletter
	let first, second;
	for(let i=0; i<text.length; i++){
		first = text.charAt(i);
		second = key.charAt(i%key.length);
		ciphertext += toChar(toNum(first)+(toNum(second)-toNum('A'))%26);
	}
	return ciphertext;
}

function toNum(char){
	return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

function toChar(num){
	return String.fromCharCode((num%26)+65);
}
