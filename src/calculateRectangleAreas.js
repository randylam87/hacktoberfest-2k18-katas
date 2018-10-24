
export const calculateRectangleAreas = (elements) => {
  let result = []; 	
  if (Array.isArray(elements) && elements.every(value => Array.isArray(value) && value.length == 2)) {
	return elements.map(element=> element.reduce((a,b) => a*b));
  }
  else{
	return () => {throw `Error at ${elements}`}
  }		  
}
