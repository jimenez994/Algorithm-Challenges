// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {
  var result = 0;
  if (s2.length > s1) {
    var holder = s1;
    s1 = s2;
    s2 = holder;
  }
  let arrS2 = s2.split("");
  for (let i = 0; i < s1.length; i++) {
    for (let e = 0; e < arrS2.length; e++) {
      if (s1[i] === s2[e]) {
        result++;
        arrS2[e] = arrS2[s2.length - 1];
        arrS2.pop()
        console.log(arrS2);
        
      }
    }
  }
  console.log(result);
  return result;
}
let s1 = "aabcc";
let s2 = "adcaa";

commonCharacterCount(s1,s2)
