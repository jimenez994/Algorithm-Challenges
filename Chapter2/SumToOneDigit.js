// Sum to one digit 
function sumToOneDigit(num) {
  var result = 0;
  var mult = 10;
  while (num > 0) {
    result += Math.floor(num % mult)
    num -= Math.floor(num % mult)
    num = num/10
  }
  num = result
  if(num < 10){
    console.log(result)
    return result;
  }
  sumToOneDigit(num)
}
sumToOneDigit(66)

// console.log(10/10)