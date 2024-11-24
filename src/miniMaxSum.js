const miniMaxSum = (arr) => {
  // prevent direct modification of original array
  const sorted = [...arr].sort((a, b) => a - b);

  const min = sorted.slice(0, -1).reduce((acc, el) => acc + el, 0);
  const max = sorted.slice(1).reduce((acc, el) => acc + el, 0);
  console.log(min, max);
};

module.exports = miniMaxSum;
