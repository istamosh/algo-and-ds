const diagonalDifference = (arr) => {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr[i].length - 1 - i];
  }
  let diff = leftDiagonal - rightDiagonal;
  return diff < 0 ? diff * -1 : diff;
};

module.exports = diagonalDifference;
