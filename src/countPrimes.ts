const countPrimes = (n: number): number => {
  if (n < 2) {
    return 0;
  }
  let a: boolean[] = Array(n).fill(true);
  a[0] = a[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (a[i]) {
      for (let j = i * i; j <= n; j += i) {
        a[j] = false;
      }
    }
  }
  return a.filter((el) => el).length;
};

export default countPrimes;
