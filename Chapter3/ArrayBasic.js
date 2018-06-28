var arr = [23,45,2,4,5,5,5,66,7,7,8,98,2,34,0,34];

// Push Front
function pushFront(val,arr) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i-1]    
  }
  arr[0] = val
  console.log(arr)
  return arr;
}
// pushFront(90, arr)

function popFront(arr) {
  var result = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length -1;
  console.log(result);
  console.log(arr);
  return result;
}
// popFront(arr);


function insertAt(arr, indx, val) {
  arr.splice(indx, 0, val)
  console.log(arr);
}
insertAt(arr, 3, "hi")