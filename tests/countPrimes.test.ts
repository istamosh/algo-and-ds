import countPrimes from "../src/countPrimes";

describe("countPrimes", () => {
  test("should return 0 for n = 0", () => {
    expect(countPrimes(0)).toBe(0);
  });

  test("should return 0 for n = 1", () => {
    expect(countPrimes(1)).toBe(0);
  });

  test("should return 4 for n = 10", () => {
    expect(countPrimes(10)).toBe(4);
  });

  test("should return 25 for n = 100", () => {
    expect(countPrimes(100)).toBe(25);
  });

  test("should return 168 for n = 1000", () => {
    expect(countPrimes(1000)).toBe(168);
  });

  test("should return 1229 for n = 10000", () => {
    expect(countPrimes(10000)).toBe(1229);
  });

  test("should return 9592 for n = 100000", () => {
    expect(countPrimes(100000)).toBe(9592);
  });
});
