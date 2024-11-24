const miniMaxSum = require("./miniMaxSum");

describe("miniMaxSum", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should calculate min and max sum for an array of positive integers", () => {
    miniMaxSum([1, 2, 3, 4, 5]);
    expect(consoleSpy).toHaveBeenCalledWith(10, 14);
  });

  test("should calculate min and max sum for an array with negative integers", () => {
    miniMaxSum([-1, -2, -3, -4, -5]);
    expect(consoleSpy).toHaveBeenCalledWith(-14, -10);
  });

  test("should calculate min and max sum for an array with mixed integers", () => {
    miniMaxSum([1, -2, 3, -4, 5]);
    expect(consoleSpy).toHaveBeenCalledWith(-2, 7);
  });

  test("should calculate min and max sum for an array with duplicate integers", () => {
    miniMaxSum([1, 1, 1, 1, 1]);
    expect(consoleSpy).toHaveBeenCalledWith(4, 4);
  });

  test("should calculate min and max sum for an array with a single element", () => {
    miniMaxSum([1]);
    expect(consoleSpy).toHaveBeenCalledWith(0, 0);
  });

  test("should calculate min and max sum for an empty array", () => {
    miniMaxSum([]);
    expect(consoleSpy).toHaveBeenCalledWith(0, 0);
  });
});
