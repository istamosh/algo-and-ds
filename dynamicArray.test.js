const dynamicArray = require("./dynamicArray");

describe("dynamicArray", () => {
  it("should perform the operations correctly", () => {
    const n = 2;
    const queries = [
      [1, 0, 5],
      [1, 1, 7],
      [1, 0, 3],
      [2, 1, 0],
      [2, 1, 1],
    ];

    const expectedResults = [7, 3];

    const results = dynamicArray(n, queries);

    expect(results).toEqual(expectedResults);
  });

  it("should perform the operations correctly (2)", () => {
    const n = 2;
    const queries = [
      //   [2, 5],
      [1, 0, 5],
      [1, 1, 7],
      [1, 0, 3],
      [2, 1, 0],
      [2, 1, 1],
    ];

    const expectedResults = [7, 3];

    const results = dynamicArray(n, queries);

    expect(results).toEqual(expectedResults);
  });
});
