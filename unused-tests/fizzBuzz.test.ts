import fizzBuzz from "../src/fizzBuzz";

describe("fizzBuzz", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should print numbers and Fizz/Buzz/FizzBuzz correctly for n = 15", () => {
    fizzBuzz(15);
    expect(consoleSpy.mock.calls).toEqual([
      [1],
      [2],
      ["Fizz"],
      [4],
      ["Buzz"],
      ["Fizz"],
      [7],
      [8],
      ["Fizz"],
      ["Buzz"],
      [11],
      ["Fizz"],
      [13],
      [14],
      ["FizzBuzz"],
    ]);
  });

  test('should print "Fizz" for multiples of 3', () => {
    fizzBuzz(3);
    expect(consoleSpy.mock.calls).toEqual([[1], [2], ["Fizz"]]);
  });

  test('should print "Buzz" for multiples of 5', () => {
    fizzBuzz(5);
    expect(consoleSpy.mock.calls).toEqual([[1], [2], ["Fizz"], [4], ["Buzz"]]);
  });

  test('should print "FizzBuzz" for multiples of 3 and 5', () => {
    fizzBuzz(15);
    expect(consoleSpy.mock.calls[14]).toEqual(["FizzBuzz"]);
  });

  test("should print numbers for non-multiples of 3 and 5", () => {
    fizzBuzz(2);
    expect(consoleSpy.mock.calls).toEqual([[1], [2]]);
  });
});
