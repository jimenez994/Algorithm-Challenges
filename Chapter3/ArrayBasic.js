var arr = [23,45,2,4,5,5,5,66,7,7,8,98,2,34,0,34];

// Push Front
function pushFront(val) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i-1]    
  }
  arr[0] = val
  console.log(arr)
  return arr;
}
// pushFront(90)

function popFront(arr, ) {
  
}