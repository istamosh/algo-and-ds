export default function persistence(num: number): number {
  let count = 0;
  while (num > 9) {
    num = String(num)
      .split("")
      .map(Number)
      .reduce((acc, cur) => (acc *= cur));
    count++;
  }
  return count;
}
