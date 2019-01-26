// v1
// working on most tests 
function makeArrayConsecutive2(n) {
  var dic = {0:"" ,1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:""}
  var count = 0;
  var result = 0;
  for(var i = 0; i<n.length; i++){
    dic[n[i]] = n[i];    
  }
  check = false;
  console.log(dic)
  for(var j =0; j < 10; j++){
    if(dic[j] !== ''){
      check = true;
      console.log(check)
    }else if(dic[j] === '' && check === true){
      count++;
      if(dic[j+1] !== '' && dic[j+1] !== undefined){
        result += count;
        count = 0;
      }
    }
  }
  console.log(result)
}
// makeArrayConsecutive2([0, 3])

// v2
function makeArrayConsecutive2v2(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  return max - min - statues.length + 1;
}
makeArrayConsecutive2v2([0,3])

