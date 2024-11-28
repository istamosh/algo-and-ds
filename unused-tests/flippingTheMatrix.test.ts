import flippingTheMatrix from "../src/flippingTheMatrix";

describe("flippingTheMatrix", () => {
  test("should return the maximum sum for a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(flippingTheMatrix(matrix)).toBe(4);
  });

  test("should return the maximum sum for a 4x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(flippingTheMatrix(matrix)).toBe(54);
  });

  test("should return the maximum sum for a 4x4 matrix with negative numbers", () => {
    const matrix = [
      [-1, -2, -3, -4],
      [-5, -6, -7, -8],
      [-9, -10, -11, -12],
      [-13, -14, -15, -16],
    ];
    expect(flippingTheMatrix(matrix)).toBe(-14);
  });

  test("should return the maximum sum for a 4x4 matrix with mixed numbers", () => {
    const matrix = [
      [1, -2, 3, -4],
      [-5, 6, -7, 8],
      [9, -10, 11, -12],
      [-13, 14, -15, 16],
    ];
    expect(flippingTheMatrix(matrix)).toBe(50);
  });

  test("should return the maximum sum for a 6x6 matrix", () => {
    const matrix = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];
    expect(flippingTheMatrix(matrix)).toBe(261);
  });
});
