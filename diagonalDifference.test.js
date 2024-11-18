const diagonalDifference = require("./diagonalDifference");

describe("diagonalDifference", () => {
  it("should perform the operations correctly", () => {
    const arr = [
      [1, 2, 3],
      [0, 5, 0],
      [4, 6, 7],
    ];

    const expectedResult = 1;
    const result = diagonalDifference(arr);
    expect(result).toEqual(expectedResult);
  });
  describe("diagonalDifference", () => {
    it("should perform the operations correctly (4x4 matrix)", () => {
      const arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];

      const expectedResult = 0;
      const result = diagonalDifference(arr);
      expect(result).toEqual(expectedResult);
    });

    it("should return 0 for a matrix with equal diagonals", () => {
      const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      const expectedResult = 0;
      const result = diagonalDifference(arr);
      expect(result).toEqual(expectedResult);
    });

    it("should handle a single element matrix", () => {
      const arr = [[5]];

      const expectedResult = 0;
      const result = diagonalDifference(arr);
      expect(result).toEqual(expectedResult);
    });

    it("should handle a 2x2 matrix", () => {
      const arr = [
        [1, 2],
        [3, 4],
      ];

      const expectedResult = 0;
      const result = diagonalDifference(arr);
      expect(result).toEqual(expectedResult);
    });

    it("should handle negative numbers", () => {
      const arr = [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
      ];

      const expectedResult = 0;
      const result = diagonalDifference(arr);
      expect(result).toEqual(expectedResult);
    });
  });
});
