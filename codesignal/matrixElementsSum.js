// passed 6/7 tests
var matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10]
]
function matrixElementsSum(matrix) {
  var result = 0; 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == 0) {
        result += matrix[i][j];
      } else if (matrix[i - 1][j] == 0) {
        continue;
      } else if (matrix[i][j] % 10 == 0) {
        continue;
      }else{
        result += matrix[i][j];
      }
    }
  }
  console.log(result);
}
matrixElementsSum(matrix);

// passed 7/7 tests

function matrixElementsSum2(matrix) {
  var rowLen = matrix.length;
  var colLen = matrix[0].length;
  var sum = 0;
  for (let col = 0; col < colLen; col++) {
    for (let row = 0; row < rowLen; row++) {
      if (matrix[row][col] != 0) {
        sum += matrix[row][col];
      }else{
        break
      }
    }
  }
  console.log(sum);
  return sum
}
matrixElementsSum2(matrix)
