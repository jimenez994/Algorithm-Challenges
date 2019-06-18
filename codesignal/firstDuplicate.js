function firstDuplicate(a) {
  var dic = {};
  for (let i = 0; i < a.length; i++) {
    if (dic[a[i]] == a[i]) return a[i];
    dic[a[i]] = a[i];
  }
  return -1
}
arr1 = [2, 1, 3, 5, 3, 2];
arr2 = [2, 2];
arr3 = [1, 2, 3, 4, 5, 6];
arr4 = []
console.log(firstDuplicate(arr3));

