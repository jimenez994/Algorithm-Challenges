// Setting and Swapping

var number1 = 42;
var myName = "Jojo";

function swapping() {
  var temp = number1;
  number1 = myName;
  myName = temp;
  return;
}

swapping();

console.log(number1);
console.log(myName);