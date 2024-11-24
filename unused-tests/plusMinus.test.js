const plusMinus = require("./plusMinus");

describe("plusMinus", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should handle an array with positive, negative, and zero values", () => {
    plusMinus([1, -2, 0, 3, -4, 0]);
    expect(consoleSpy).toHaveBeenCalledWith("0.333333\n0.333333\n0.333333");
  });

  test("should handle an array with only positive values", () => {
    plusMinus([1, 2, 3, 4, 5]);
    expect(consoleSpy).toHaveBeenCalledWith("1.000000\n0.000000\n0.000000");
  });

  test("should handle an array with only negative values", () => {
    plusMinus([-1, -2, -3, -4, -5]);
    expect(consoleSpy).toHaveBeenCalledWith("0.000000\n1.000000\n0.000000");
  });

  test("should handle an array with only zero values", () => {
    plusMinus([0, 0, 0, 0, 0]);
    expect(consoleSpy).toHaveBeenCalledWith("0.000000\n0.000000\n1.000000");
  });

  test("should handle an empty array", () => {
    plusMinus([]);
    expect(consoleSpy).toHaveBeenCalledWith("NaN\nNaN\nNaN");
  });

  test("should handle an array with one positive value", () => {
    plusMinus([1]);
    expect(consoleSpy).toHaveBeenCalledWith("1.000000\n0.000000\n0.000000");
  });

  test("should handle an array with one negative value", () => {
    plusMinus([-1]);
    expect(consoleSpy).toHaveBeenCalledWith("0.000000\n1.000000\n0.000000");
  });

  test("should handle an array with one zero value", () => {
    plusMinus([0]);
    expect(consoleSpy).toHaveBeenCalledWith("0.000000\n0.000000\n1.000000");
  });
});
