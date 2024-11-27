import countingSort from "../src/countingSort";

describe("countingSort", () => {
  it("should return a frequency array of length 100", () => {
    const arr = [1, 4, 1, 2, 7, 5, 2];
    const result = countingSort(arr);
    expect(result.length).toBe(100);
  });

  it("should correctly count the frequency of each number", () => {
    const arr = [1, 4, 1, 2, 7, 5, 2];
    const result = countingSort(arr);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(2);
    expect(result[4]).toBe(1);
    expect(result[5]).toBe(1);
    expect(result[7]).toBe(1);
  });

  it("should return an array of zeros for an empty input array", () => {
    const arr: number[] = [];
    const result = countingSort(arr);
    expect(result).toEqual(Array(100).fill(0));
  });

  it("should handle an array with all elements the same", () => {
    const arr = [5, 5, 5, 5, 5];
    const result = countingSort(arr);
    expect(result[5]).toBe(5);
    expect(result.reduce((acc, val) => acc + val, 0)).toBe(5);
  });

  it("should handle an array with elements at the boundaries", () => {
    const arr = [0, 99, 0, 99];
    const result = countingSort(arr);
    expect(result[0]).toBe(2);
    expect(result[99]).toBe(2);
  });
});
