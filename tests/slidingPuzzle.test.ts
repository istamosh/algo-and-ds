import slidingPuzzle from "../src/slidingPuzzle";

describe("slidingPuzzle", () => {
  test("solves the puzzle with minimum moves", () => {
    const board: number[][] = [
      [1, 2, 3],
      [4, 0, 5],
    ];
    expect(slidingPuzzle(board)).toBe(1);
  });

  test("returns -1 for unsolvable puzzle", () => {
    const board: number[][] = [
      [1, 2, 3],
      [5, 4, 0],
    ];
    expect(slidingPuzzle(board)).toBe(-1);
  });

  test("solves the puzzle with multiple moves", () => {
    const board: number[][] = [
      [4, 1, 2],
      [5, 0, 3],
    ];
    expect(slidingPuzzle(board)).toBe(5);
  });

  test("returns 0 for already solved puzzle", () => {
    const board: number[][] = [
      [1, 2, 3],
      [4, 5, 0],
    ];
    expect(slidingPuzzle(board)).toBe(0);
  });

  test("solves [[3, 2, 4], [1, 5, 0]]", () => {
    const board: number[][] = [
      [3, 2, 4],
      [1, 5, 0],
    ];
    expect(slidingPuzzle(board)).toBe(14);
  });
});
