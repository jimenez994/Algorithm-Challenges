// Sum to one digit 
function sumToOneDigit(num) {
  var result = 0;
  while (num > 0) {
    result += Math.floor(num % 10)
    num -= Math.floor(num % 10)
    num = num/10
  }
  num = result
  if(num < 10){
    console.log(result)
    return result;
  }
  sumToOneDigit(num)
}
sumToOneDigit(16)

