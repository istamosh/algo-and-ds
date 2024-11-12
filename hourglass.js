const hourglassSum = (arr) => {
  if (arr.length < 3 || arr[0].length < 3) {
    return null;
  }
  let target = -Infinity;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      const currHourglassVal =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];

      if (currHourglassVal > target) {
        target = currHourglassVal;
      }
    }
  }
  return target;
};

module.exports = hourglassSum;
