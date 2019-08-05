function isDiagonalMatrix(matrix) {
  var magicNumber = 0;
  for (let i = 0; i < matrix.length; i++) {  
    for (let e = 0; e < matrix[i].length; e++) {
      if (e !== magicNumber) {
        if (matrix[i][e] > 0) {
          console.log(false);
          return false;
        }
      }
    }
    magicNumber++;
  }
  console.log(true);
  return true
}
matrix = [[1, 0 ,0], 
          [0, 5, 0], 
          [0, 0, 3]
         
]

isDiagonalMatrix(matrix)
