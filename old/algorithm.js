arr1 = [1, 2, 4, 5, 6, -1, -4, 5, -3, 5, -9];
// #27
// swap string for Array Negative Values 
function swapNegative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
// console.log(swapNegative(arr1));

// #27
// shift Array values left varsion 1
function shiftArr1(arr) {
    for(var i=0; i < arr.length; i++){
        if(i != arr.length-1){
            arr[i] = arr[i+1];
        }else{
            arr[i] = 0;
        }
    }
    console.log(arr)
}
// shiftArr1(arr1)

// varsion 2
function shiftArr2(arr) {
    arr.push(0)
    arr.shift()
    console.log(arr)
}
// shiftArr2(arr1)

// Sigma
function sigma(num){
    var j = 0;
    for(var i=1; i<=num; i++){
        j+=i
        console.log(j);        
    }
    console.log(j);
}
// sigma(3);

// Fatorial
function factorial(num) {
    var j = 1;
    for (var i = 1; i <= num; i++) {
        j *= i
        console.log(j);
    }
    console.log(j);
}
// factorial(3);

// generate coin change
function coinChange(num){
    var p = num
    var quarters = 0
    var dimes = 0
    var nickels = 0 
    while (p > 5) {
        if(p > 25){
            quarters = Math.floor(p/25)
            console.log("quarters "+quarters)
            p = p%25
        }else if( p > 10){
            dimes = Math.floor(p/10);
            console.log("dimes "+dimes)
            p= p%10
        }else if(p > 5){
            nickels = Math.floor(p/5);
            p = p%5
            console.log("nickels " +nickels)
        }
    }
    console.log("pennies " + p)
}
// coinChange(94);

// fibonacci
function ifibonacci(num) {
    var fibs = [0,1]
    for (var i = 0; i< num; i++){
        console.log(fibs)
        fibs.push(fibs[0]+ fibs[1])
        console.log(fibs)        
        fibs.shift()
        console.log(fibs)        
    }
    console.log("fibonacci of "+ num +" = "+ fibs[0])
}
// ifibonacci(6)

function rfibonacci(num) {
    if(num === 1|| num === 2){
        return 1
    }else{
        return rfibonacci(num-1) + rfibonacci(num-2)
    }
}
// console.log(rfibonacci(5))

// pushFront #38
function pushFront(num, arr) {
    for (let i = arr.length -1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = num;
    return arr;
}
// console.log(pushFront(5,[9,8,77,6,6,4,4,3]))

// popFront #38
function popFront(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr.pop();
}
// console.log(popFront([2,3,4,45,5,23]));

// second largest
function secondLargest(arrr) {
    
}

// shuffle#43
function shuffle(arr) {
    temp = 0;
    for(var i = 0; i < arr.length; i++){
        temp = arr[i];
        r = Math.floor(Math.random() * arr.length)
        arr[i] = arr[r]
        arr[r] = temp;
    }
    console.log(arr)
}
// shuffle([1,2,3,4,5,6,7,8,9,10])

// insertionSort#126
function insertionSort(arr) {
    temp = 0;
    pointer = 0 
    j = 0
    for (let i = 1; i < arr.length; i++) {
        pointer = arr[i];
        j = i-1
        while(j >= 0 && pointer < arr[j] ){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--
        }
    }
    console.log(arr)
}
// insertionSort([9, 2, 10, 5, 4, 6, 7, 8, 1, 2])

// reverse string #51
function reverseString(str) {
    newStrt = ""
    for (let i = 0; i< str.length; i++) {
        newStrt += str[str.length -i -1]
    }
    console.log(newStrt)
}
// reverseString("jonathan")

// parens valid #52
function parensValid(str) {
    open = 0;
    close = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == ')'){
            close++;
            if(close>open){
                return false;
            }
        }else if (str[i] == '('){
            open++
        }
        
    }
    if(open == close){
        return true;
    }
    return false;
}
// console.log(parensValid("(((rvr())))"));

// zip Arrays into Map # 55
function zip(x, y) {
    var d = {}
    for (let i = 0; i < x.length; i++) {
        d[x[i]] = y[i]
    }
    console.log(d)
}
// zip(["a","b","c"],[1,2,3])

// Invert Hash # 55
function invertHash(z) {
    newT = {}
    for (var i in z) {
        console.log(i)
        newT[z[i]] = i;

    }
    console.log(newT)
}
// invertHash({ a: 1, "hu": 2, c: 3 })
