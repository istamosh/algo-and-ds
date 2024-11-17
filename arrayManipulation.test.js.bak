const arrayManipulation = require("./arrayManipulation");

describe("arrayManipulation", () => {
  it("should perform the operations correctly", () => {
    const n = 5;
    const queries = [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ];

    const expectedResult = 200;

    const result = arrayManipulation(n, queries);

    expect(result).toEqual(expectedResult);
  });

  it("should perform the operations correctly (2)", () => {
    const n = 10;
    const queries = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ];

    const expectedResult = 10;

    const result = arrayManipulation(n, queries);

    expect(result).toEqual(expectedResult);
  });

  it("should perform the operations correctly (3)", () => {
    const n = 10;
    const queries = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
      [7, 10, 2],
    ];

    const expectedResult = 10;

    const result = arrayManipulation(n, queries);

    expect(result).toEqual(expectedResult);
  });

  it("should perform the operations correctly (4)", () => {
    const n = 10;
    const queries = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
      [7, 10, 2],
      [1, 10, 1],
    ];

    const expectedResult = 11;

    const result = arrayManipulation(n, queries);

    expect(result).toEqual(expectedResult);
  });
});
