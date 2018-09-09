/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(arr) {
  var result = arr[0] * arr[0 + 1];
  for(var i = 1; i<arr.length-1; i++){
    if(arr[i]*arr[i+1] > result){
      result = arr[i] * arr[i + 1];
    }
  }
  return result;
}