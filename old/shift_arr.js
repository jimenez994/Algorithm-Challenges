function nums(arr){
    var temp = arr[arr.length -1];
    var k = arr.length-1;
    var j = arr[arr.length-1];
    for(var i =1; i<=k; k--){
      j--
        arr[k] = j;
        
    }
    arr[0]=temp;
  console.log(arr);
}
// nums([0,1,2,3,4,5,6,7,8,9,10]);

function removeNegative(arr) {
  var j = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0){
      console.log(arr +" before");
      arr[j] = arr[i]
      console.log(arr +" after");      
      j++
    }
  }
  arr.length = j
  console.log(arr);

}
removeNegative([0, 1, -2, 3, 4, 5, -6])
