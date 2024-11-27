import findChampion from "../src/findChampion2";

describe("findChampion", () => {
  test("should return the champion when there is one", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    expect(findChampion(n, edges)).toBe(0);
  });

  test("should return 0 when there are [[0,1], [1,2], [2,3]]", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    expect(findChampion(n, edges)).toBe(0);
  });

  test("should return -1 when there are multiple potential champions", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [2, 3],
    ];
    expect(findChampion(n, edges)).toBe(-1);
  });

  test("should return the champion when there is only one team", () => {
    const n = 1;
    const edges: number[][] = [];
    expect(findChampion(n, edges)).toBe(0);
  });

  test("should return -1 when there are no edges", () => {
    const n = 4;
    const edges: number[][] = [];
    expect(findChampion(n, edges)).toBe(-1);
  });
});
