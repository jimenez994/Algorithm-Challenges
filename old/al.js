
function intermediateSums(arr) {
    var counter = 0;
    var length = arr.length;
    var sum = 0;
    if (arr.length % 10 !== 0) {
      for (var i = arr.length; i %10 !== 0; i--) {
        sum += arr[i];
      }
      arr[arr.length] = sum;
    }
    while ( counter * 10 +1 < length) {
      sum = 0;
      for ( i = counter*10 + counter; i < (counter+1)*10 + counter; i++) {
        sum += arr[i];
      }
      for (var j = arr.length; j > (counter+1)*10 + counter; j--) {
        arr[j] = arr[j-1];
      }
      arr[(counter+1)*10 + counter] = sum;
      counter++;
    }
    console.log(arr);
    return arr;
  }
intermiditaSum([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);