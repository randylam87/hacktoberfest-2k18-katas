export const unusedNumbers = (...numbers) => {
  //Process numbers and remove duplicated
  const numberString = numbers.join('');
  
  const numberSet = new Set();
  for(let x=0; x <= numberString.length; x++){
   numberSet.add(numberString.charAt(x)); 
  }

  
  let numbersToValidate = [...numberSet];
  numbersToValidate.pop();
 
  const integerNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const unusedNumbersArray = [...integerNumbers];
 
  numbersToValidate.forEach(num => {  
     
     if(unusedNumbersArray.includes(parseInt(num))){       
         const index = unusedNumbersArray.indexOf(parseInt(num));        
         unusedNumbersArray.splice(index, 1);          
        
     }
 });
 
 return unusedNumbersArray.join('');
  
}
