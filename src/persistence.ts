const operation = (n: number): number =>
  n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);

export default function persistence(num: number): number {
  if (num.toString().length < 2) return 0;
  let n = num;
  let count = 0;
  while (n.toString().length > 1) {
    n = operation(n);
    count++;
  }
  return count;
}
