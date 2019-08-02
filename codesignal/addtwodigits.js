function sum(n) {
  var sum = 0;
  var holder;
  while (n > 0) {
    holder = (n % 10);
    sum += holder;
    n = n - holder;
    n = n / 10;
  }

  console.log(sum);
  return sum;
}

sum(12354);