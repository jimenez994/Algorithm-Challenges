// Sigma
function sigmaW(num) {
  var sum = num;
  var org = num
  console.log(num)
  while (num > 0) {    
    --num
    sum += num
  }
  console.log("sigma of " + org + " is " + sum);
  return sum;
}
// sigmaW(23)

function sigmR(num) {
  var sum = num;
  function helper(num, sum){
    if(num < 1){
      console.log("sigma is " + sum)
      return sum;
    }
    helper(--num, sum+num)
  }
  helper(num, sum)
}
// sigmR(-3);
