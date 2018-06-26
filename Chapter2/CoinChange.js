// Coin Change
function coinChange(num) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  if(num > 25){
    quarters = Math.floor(num/25)
    num %= 25;
  }
  if(num > 10){
    dimes = Math.floor(num/10)
    num %= 10;
  }
  if(num > 5){
    nickels = Math.floor(num/5)
    num %= 5
  }
  pennies = num
  console.log( "Your coin change is \n Quarters " + quarters,"\n Dimes " + dimes,"\n Nickels " + nickels,"\n Pennies " + pennies)
}
coinChange(123)