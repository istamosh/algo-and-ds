const lonelyInteger = require("../src/lonelyInteger");

describe("lonelyInteger", () => {
  it("should return the lonely integer when there is only one unique number", () => {
    const result = lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
    expect(result).toBe(4);
  });

  it("should return the lonely integer when the array has negative numbers", () => {
    const result = lonelyInteger([-1, -2, -3, -2, -1]);
    expect(result).toBe(-3);
  });

  it("should return the lonely integer when the array has multiple elements", () => {
    const result = lonelyInteger([10, 20, 30, 20, 10]);
    expect(result).toBe(30);
  });

  it("should return the lonely integer when the array has only one element", () => {
    const result = lonelyInteger([42]);
    expect(result).toBe(42);
  });

  it("should return undefined when there is no lonely integer", () => {
    const result = lonelyInteger([1, 1, 2, 2, 3, 3]);
    expect(result).toBeUndefined();
  });

  it("should return the lonely integer when the array has repeated elements", () => {
    const result = lonelyInteger([5, 5, 5, 5, 5, 5, 7]);
    expect(result).toBe(7);
  });
});
