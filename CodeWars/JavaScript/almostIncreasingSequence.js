function almostIncreasingSequence(a) {
  var count = 0;
  for(var i = 0; i < a.length; i++){
    if(a[i] >= a[i + 1]) {
      count++;
      for(var j = i; j < a.length; j++){

      }
    }
    if(count > 1){
      return false;
    }
  }
  return true
}
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]))