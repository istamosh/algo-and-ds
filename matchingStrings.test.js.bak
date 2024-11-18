const matchingStrings = require("./matchingStrings");

test("should return correct counts for each query", () => {
  const stringList = ["ab", "ab", "abc"];
  const queries = ["ab", "abc", "bc"];
  const result = matchingStrings(stringList, queries);
  expect(result).toEqual([2, 1, 0]);
});

test("should return zero for all queries if stringList is empty", () => {
  const stringList = [];
  const queries = ["a", "b", "c"];
  const result = matchingStrings(stringList, queries);
  expect(result).toEqual([0, 0, 0]);
});

test("should return zero for queries not in stringList", () => {
  const stringList = ["a", "b", "c"];
  const queries = ["d", "e", "f"];
  const result = matchingStrings(stringList, queries);
  expect(result).toEqual([0, 0, 0]);
});

test("should handle case with no queries", () => {
  const stringList = ["a", "b", "c"];
  const queries = [];
  const result = matchingStrings(stringList, queries);
  expect(result).toEqual([]);
});

test("should handle case with no stringList and no queries", () => {
  const stringList = [];
  const queries = [];
  const result = matchingStrings(stringList, queries);
  expect(result).toEqual([]);
});
