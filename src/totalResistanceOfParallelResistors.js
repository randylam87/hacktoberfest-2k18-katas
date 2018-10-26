export const totalResistanceOfParallelResistors = function(parallelConnectedResistors) {
  
  if(arguments.length == 0) {
    throw 'Empty arguments';
  }

  for(var i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] !== 'number') throw 'Not a number';
  }

  let totalResistance = 0;
  let totalInvert = 0;

  for(let i = 0; i < arguments.length; i++) {
    totalInvert += 1 / arguments[i];
  }
  totalResistance = 1 / totalInvert;
  return totalResistance.toFixed(2);
};
