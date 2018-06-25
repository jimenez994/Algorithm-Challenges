// variable
var arr = [2,3,4,5,-67,7,-654,332,546,-76,89,654,3,-23,455]

// 1 ---------  R print 1-255  ----------
function printTo255R(num) {
  console.log("Your number is " + num)
  if(num > 254){
    console.log("got the end")
    return;
  }
  return printTo255R(num+=1);
}
// printTo255R(0);

function printTo255F() {
  for (let i = 0; i <= 255; i++) {
    console.log("your numeber is"+ i)    
  }
}
// printTo255F();

// 2 ---------- print odds 1-255 ----------
function oddsW() {
  num = -1;
  while (num != 255) {
    num+=2
    console.log(num)
  }
}
// oddsW();

// 3 ------ sum ----------
function sumTo255() {
  var sum = 0;
  for (let i = 0; i < 256; i++) {
    console.log(i +" + " + sum + " = " + (sum+i))
    sum += i;
    
  }
}
// sumTo255();

// 4 ----- pring arr values -------
function arrVals(arr) {
  var indx = 0;
  arr.forEach(element => {
    console.log("Element: " + element + " at index: " + indx)
    indx++;
  });
}
// arrVals(arr)

// 5 ----- maxOfArr -------
function maxOfArr(arr) {
  var max = arr[0];
  arr.forEach(element => {
    if(max < element){
      max = element;
    }
  })
  console.log("This is your max of this array " + max);
}
// maxOfArr(arr);

// 6 ------ average -----
function average(arr) {
  function helper(arr, sum, indx) {
    if(indx == arr.length){
      console.log("this is your average of your array " +(sum/indx))
      return sum/indx;
    }
    return helper(arr, (sum + arr[indx]) , indx+=1 );
  }
  helper(arr, arr[0], 1)
}
// average(arr);

// 7 ----- array odds 1-255 --------
function arratOdds() {
  var arr = [];
  num = 1
  while (num <= 255) {
    arr.push(num)
    num+=2
  }
  return arr;
  console.log("Your array of odds: \n" + "[" + arr + "]") ;
}
// arratOdds();

//  8 ---- Square Array Values -------
function SquareArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];    
  }
  console.log(arr)
}
// SquareArray(arr);

// 9 ------ return array count greater that y --------
function greaterY(arr, y) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > y){
      count++;
      console.log(arr[i] + " > " + y);
    }
  }
  console.log(count)
  return;
}
// greaterY(arr, 16)

// 10 ------ zero out negatives ------
function zeroOutNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0 ){
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
// zeroOutNeg(arr);

// 11 ---- Shift left ---- 
function shiftLeft(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
  }
  arr[arr.length -1] = 0;
  console.log(" shift left "+arr)
  return arr;
}
shiftLeft(arr);