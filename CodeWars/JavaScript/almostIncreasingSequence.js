// v1 not working properly
function almostIncreasingSequence(a) {
  var count = 0;
  for(var i = 0; i < a.length; i++){
    if(a[i] >= a[i + 1]) {
      count++;
      
    }
    if(count > 1){
      return false;
    }
  }
  return true
}
// console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]))

// v2 not mine
function almostIncreasingSequence2(sequence) {

  var remove = 0;
  for (var i = 0; i < sequence.length - 2; i++) {

    var first = sequence[i];
    var next = sequence[i + 1];
    var last = sequence[i + 2];

    if (first >= next) {
      remove++;
      sequence[i] = next - 1;
    }
    if (next >= last) {
      remove++; {
        if (first == last) {
          sequence[i + 2] = next + 1;
        } else {
          sequence[i + 1] = first;
        }
      }
    }

  }
  if (remove > 1) {
    return false;
  } else {
    return true;
  }
}

console.log(almostIncreasingSequence2([40, 50, 60, 10, 20, 30]))
