const flippingTheMatrix = (matrix: number[][]): number => {
  const half = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < half; i++) {
    for (let j = 0; j < half; j++) {
      const tl = matrix[i][j];
      const tr = matrix[i][2 * half - 1 - j];
      const bl = matrix[2 * half - 1 - i][j];
      const br = matrix[2 * half - 1 - i][2 * half - 1 - j];
      maxSum += Math.max(tl, tr, bl, br);
    }
  }
  return maxSum;
};

// [1,2,3,4]
// [5,6,7,8]
// [9,10,11,12]
// [13,14,15,16]
// it's mirrored like a rubik's cube, so TL is 1, 4, 13, 16
// BL = 5, 8, 9, 12

export default flippingTheMatrix;
