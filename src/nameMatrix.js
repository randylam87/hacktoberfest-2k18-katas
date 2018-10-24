const findSquare = (length, n = 1) => (n*n >= length) ? n : findSquare(length, n+1);

const assembleMatrix = (name, root) => {
 const matrixSize = [...Array(root)].map((_, i) => i);
 return matrixSize.map(
   (_, rowIndex, _arr) =>  matrixSize.map((_, colIndex) => {
      const indexLength = colIndex + rowIndex * _arr.length;
      return (indexLength < name.length)
        ? name[indexLength]
        : '-';
   }),
  );
}

export const nameMatrix = (name) => {
  const squareSize = findSquare(name.length);
  return assembleMatrix(name, squareSize);
};