/*
Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true
*/

function checkPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  for(var i = 0; i < inputString.length/2; i++){
    if(inputString[i] != inputString[inputString.length -i-1]){
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("Ihi"))