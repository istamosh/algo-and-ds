const rotateLeft = require("./rotateLeft");

test("rotateLeft rotates the array correctly when d is less than array length", () => {
  expect(rotateLeft(2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5, 1, 2]);
});

test("rotateLeft returns the same array when d is 0", () => {
  expect(rotateLeft(0, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("rotateLeft returns the same array when d is equal to array length", () => {
  expect(rotateLeft(5, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("rotateLeft rotates the array correctly when d is greater than array length", () => {
  expect(rotateLeft(7, [1, 2, 3, 4, 5])).toEqual([3, 4, 5, 1, 2]);
});

test("rotateLeft returns the same array when array length is less than 2", () => {
  expect(rotateLeft(1, [1])).toEqual([1]);
});

test("rotateLeft handles empty array", () => {
  expect(rotateLeft(3, [])).toEqual([]);
});
