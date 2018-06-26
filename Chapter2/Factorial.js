// Factorial
function factorialW(num) {
  var result = num;
  var org = num
  console.log(num)
  while (num > 1) {
    --num
    result *= num
  }
  console.log("Factorial of " + org + " is " + result);
  return result;
}
// factorialW(5)

function factorialR(num) {
  var result = num;
  function helper(num, result) {
    if (num < 2) {
      console.log("Factorial is " + result)
      return result;
    }
    helper(--num, result * num)
  }
  helper(num, result)
}
// factorialR(1)