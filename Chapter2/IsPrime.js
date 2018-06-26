//  Is a Prime Number
function isPrime(num) {
  isPrime = true;
  if(num >1){
    check = 2;
    while(check <= Math.floor(num/2)){
      if (num % check == 0){
        console.log(num + " % " + check + " = " + num % check)
        isPrime = false;
      }
      check += 1
    }
  }
  console.log(num + " is prime: "+isPrime)
}
isPrime(97)
