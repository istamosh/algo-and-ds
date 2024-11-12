const hourglassSum = require("./hourglass");

describe("hourglassSum", () => {
  it("should return the maximum hourglass sum", () => {
    const arr = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    expect(hourglassSum(arr)).toBe(19);
  });

  it("should return null for arrays smaller than 3x3", () => {
    const arr = [
      [1, 1],
      [1, 1],
    ];
    expect(hourglassSum(arr)).toBeNull();
  });

  it("should handle negative numbers correctly", () => {
    const arr = [
      [-1, -2, -3, -4, -5, -6, -7],
      [-8, -9, -1, -2, -3, -4, -5],
      [-6, -7, -8, -9, -1, -2, -3],
      [-4, -5, -6, -7, -8, -9, -1],
      [-2, -3, -4, -5, -6, -7, -8],
      [-9, -1, -2, -3, -4, -5, -6],
      [-7, -8, -9, -1, -2, -3, -4],
    ];
    expect(hourglassSum(arr)).toBe(-28);
  });
});
