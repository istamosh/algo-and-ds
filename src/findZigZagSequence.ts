const findZigZagSequence = (a: number[], n: number): void => {
  a.sort((a, b) => a - b);
  const half = Math.floor(n / 2);
  [a[half], a[n - 1]] = [a[n - 1], a[half]];

  let secondHalf = half + 1;
  let end = n - 2;
  while (secondHalf <= end) {
    [a[secondHalf], a[end]] = [a[end], a[secondHalf]];
    secondHalf++;
    end--;
  }

  console.log(a.join(" "));

  return;
};

export default findZigZagSequence;
