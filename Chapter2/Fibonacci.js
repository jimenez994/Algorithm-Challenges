// Fibonacci
function fib(num) {
  var fibs = [0,1]
  if(num < 2){
    console.log("fib of " + num + " = " + fibs[num])    
    return fibs[num];
  }
  for (let i = 1; i < num; i++) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2] );
  }
  console.log("fib of " + num + " = " + fibs[fibs.length-1])
  console.log(fibs);
  return fibs[fibs.length - 1];
}
fib(26)

// Fibonacci Recurse
function fibR(num) {
    if(num < 2){
      console.log("Your fib + " + num)
      return num;
    }
    return fibR(num-1) + fibR(num-2)
}
// console.log(fibR(5))