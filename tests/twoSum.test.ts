import twoSum from "../src/twoSum";

describe("twoSum", () => {
  it("should return indices of the two numbers such that they add up to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it("should return an empty array if no two numbers add up to the target", () => {
    const nums = [1, 2, 3, 4];
    const target = 8;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });

  it("should handle negative numbers correctly", () => {
    const nums = [-1, -2, -3, -4];
    const target = -6;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 3]);
  });

  it("should handle an array with multiple pairs adding up to the target", () => {
    const nums = [1, 3, 3, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 2]);
  });

  it("should return the first pair of indices if multiple pairs exist", () => {
    const nums = [1, 2, 3, 4, 4];
    const target = 8;
    const result = twoSum(nums, target);
    expect(result).toEqual([3, 4]);
  });
});
