// Pascal
function Pascal(num) {
  var arr1 = [1];
  var arr2 = [1,1];
  var result = [];
  var n = 3;
  if(num == 1 ){
    return arr1;
  }else if (num == 2) {
    return arr2
  } else {
    function helper(n, arr) {
      a=[1],
      a[n-1]= 1;
      if(n <= num){
        for (let i = 1, j = arr.length-1; i <=j ; i++, j--) {
          if(i!=j) {
            a[i] = arr[i]+ arr[i-1];
            a[a.length-i-1] = a[i];
          }else{
            a[i]= arr[i]*2;
          }
        }
        helper(n+1, a);
      }else{
        result = arr;
      }
    }
    helper(n, arr2)
    return result;
  }
}
console.log(Pascal(7))