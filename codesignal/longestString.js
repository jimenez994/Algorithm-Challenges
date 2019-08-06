// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      if (result.length == 0) {
        result.push(arr[i])
      } else {
        if (result[0].length < arr[i].length) {
          result = [];
          result.push(arr[i]);
        }else if (result[0].length <= arr[i].length) {
          // result = [];
          result.push(arr[i]);
        }
      }
    }
    
  }
  console.log(result);
  return result;
}
var inputArray = ["aba", "aa", "ad", "vcd", "aba"]

allLongestStrings(inputArray)