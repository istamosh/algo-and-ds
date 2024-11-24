const findMedian = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);

  // if the length is odd
  if (sorted.length % 2 === 1) {
    return sorted[sorted.length / 2 - 0.5];
  } else {
    return (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2;
  }
};

console.log(findMedian([1, 10, 4, 8, 5]));
console.log(findMedian([1, 10, 4, 8, 5, 12]));
