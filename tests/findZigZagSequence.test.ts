import findZigZagSequence from "../src/findZigZagSequence";

describe("findZigZagSequence", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should transform array into zigzag sequence for odd length", () => {
    const arr = [1, 2, 3, 4, 5];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("1 2 5 4 3");
  });

  test("should transform array into zigzag sequence for even length", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("1 2 3 6 5 4");
  });

  test("should handle array with duplicate elements", () => {
    const arr = [4, 4, 4, 4, 4];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("4 4 4 4 4");
  });

  test("should handle array with negative elements", () => {
    const arr = [-3, -1, -2, -4, -5];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("-5 -4 -1 -2 -3");
  });

  test("should handle array with single element", () => {
    const arr = [1];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("1");
  });

  test("should handle array with two elements", () => {
    const arr = [2, 1];
    findZigZagSequence(arr, arr.length);
    expect(consoleSpy).toHaveBeenCalledWith("1 2");
  });
});
