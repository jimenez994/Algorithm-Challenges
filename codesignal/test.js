// Given an array a of positive integers, find the number of pairs of integers for which the difference between the two numbers is equal to a given number k. Since the number of pairs could be quite large, take it modulo 109 + 7 for your output.

// Example

// For k = 3 and a = [1, 6, 8, 2, 4, 9, 12], the output should be
// countPairsWithDifference(k, a) = 3.


// There are three pairs of integers whose difference is equal to 3: (1, 4), (6, 9) and (9, 12).

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer k

// The specified difference between two numbers.

// Guaranteed constraints:
// 1 ≤ k ≤ 1000.

// [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.

// [output] integer

// The number of pairs of integers with difference k modulo 109 + 7.

// k = 3
// a = [ 10, 13, 16, 20, 28, 31 ]
// sum = 2

// function countPairsWithDifference(k, a) {
//   let sum = 0;

//   for (let i = 0; i < a.length; i += 2) {
//     let first = a[i]; // 10
//     let second = a[i + 1]; // 13
//     let diff = 0;

//     if (second > first)
//     {
//       diff = second - first;
//     } else {
//       diff = first - second; // -3
//     }

//     if (diff == k) {
//       sum++
//     }
//   }
// }

function countPairsWithDifference(k, a) {
  let sum = 0;

  while (a.length > 0) {
    let first = a.shift();
    for (let i = 0; i < a.length; i++) {
      let second = a[i];
      if (second > first) {
        diff = second - first;
      } else {
        diff = first - second; // -3
      }
      if (diff == k) {
        console.log( first, second );
        sum++;
      }
    }
  }
  console.log(sum);
  
  return sum; 
}
// k = 3 
// a = [1, 6, 8, 2, 4, 9, 12]
// countPairsWithDifference(k,a)

