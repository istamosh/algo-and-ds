import findChampion from "../src/findChampion2";

describe("findChampion", () => {
  test("should return the champion when there is one", () => {
    const n = 4;
    const edges = [
      [1, 2],
      [1, 3],
      [4, 1],
    ];
    expect(findChampion(n, edges)).toBe(4);
  });

  test("should return -1 when there is no champion", () => {
    const n = 4;
    const edges = [
      [3, 1],
      [2, 1],
      [3, 4],
    ];
    expect(findChampion(n, edges)).toBe(-1);
  });

  test("should return -1 when there are multiple candidates", () => {
    const n = 4;
    const edges = [
      [1, 2],
      [2, 3],
      [4, 3],
    ];
    expect(findChampion(n, edges)).toBe(-1);
  });

  test("should handle empty edges", () => {
    const n = 4;
    const edges: number[][] = [];
    expect(findChampion(n, edges)).toBe(-1);
  });

  test("should handle single edge", () => {
    const n = 2;
    const edges = [[1, 2]];
    expect(findChampion(n, edges)).toBe(1);
  });

  test("should handle multiple edges with one champion", () => {
    const n = 5;
    const edges = [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ];
    expect(findChampion(n, edges)).toBe(1);
  });

  test("should handle multiple edges with no champion", () => {
    const n = 5;
    const edges = [
      [1, 0],
      [2, 3],
      [4, 0],
      [4, 2],
    ];
    expect(findChampion(n, edges)).toBe(-1);
  });
});
