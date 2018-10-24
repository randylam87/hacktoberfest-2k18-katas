import { isArray } from "util";

let innerDepth = 0;
let rightShiftValue = 0;
let leftShiftValue = 0;
let shiftBottomValue = 0;

const spiral = (matrix, output, state) => {
  const TOTAL_ROWS = matrix.length - 1;
  if (state === 'DOWN') {
    if (innerDepth <= TOTAL_ROWS - innerDepth) {
      for (let m = innerDepth; m <= TOTAL_ROWS - innerDepth; m++) {
        output.push(matrix[m][leftShiftValue])
      }
      leftShiftValue++;
      spiral(matrix, output, 'RIGHT')
    }
  }
  if (state === 'RIGHT') {
    if (matrix[TOTAL_ROWS - innerDepth].length - leftShiftValue - rightShiftValue > 0) {
      for (let x = leftShiftValue; x < matrix[TOTAL_ROWS - innerDepth].length - rightShiftValue; x++) {
        output.push(matrix[TOTAL_ROWS - innerDepth][x])
      }
      shiftBottomValue++;
      spiral(matrix, output, 'UP')
    }
  }
  if (state === 'UP') {
    if (TOTAL_ROWS - shiftBottomValue - innerDepth >= 0) {
      for (let i = TOTAL_ROWS - shiftBottomValue; i >= innerDepth; i--) {
        let varLength = matrix[i].length - 1;
        output.push(matrix[i][varLength - rightShiftValue])
        // output.push(matrix[i][innerDepth])
      }
      rightShiftValue++;
      spiral(matrix, output, 'LEFT')
    }
  }
  if (state === 'LEFT') {
    let varLength = matrix[innerDepth].length - 1;
    if (varLength - rightShiftValue - leftShiftValue >= 0) {
      for (let x = varLength - rightShiftValue; x >= leftShiftValue; x--) {
        output.push(matrix[innerDepth][x])
      }
      innerDepth++;
      spiral(matrix, output, 'DOWN')
    }
  }
  return output;
}

const invalidMatrix = (matrix) => {
  let invalid = false;
  let numOfArgs = null;

  if (!isArray(matrix)) {
    throw new Error('Invalid Arg');
  }
  else if (matrix.length === 0 || matrix[0].length === 0) {
    throw new Error('Invalid Arg');
  }
  else if (matrix.length === 1) {
    throw new Error('Invalid Arg');
  }
  else {
    matrix.forEach(m => {
      !numOfArgs ? numOfArgs = m.length : null;
      if (numOfArgs !== m.length) {
        invalid = true;
        throw new Error('Invalid Matrix')
      }
      m.forEach(a => !!parseInt(a, 10) === false ? invalid = true : null)
    })
  }
  if(invalid) throw new Error('Invalid')
  return invalid
}

export const spiralMatrix = (matrix) => {
  innerDepth = 0;
  rightShiftValue = 0;
  leftShiftValue = 0;
  shiftBottomValue = 0;
  let output = [];

  if(matrix.length === 1 && !isArray(matrix[0])){
    output = matrix;
  }
  else if (!invalidMatrix(matrix) && matrix.length > 0 && matrix[0].length > 0) {
    spiral(matrix, output, 'DOWN')
  }

  return output;
};
