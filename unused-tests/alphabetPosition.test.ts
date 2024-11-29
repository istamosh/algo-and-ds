import { assert } from "chai";
import alphabetPosition from "../src/alphabetPosition";

describe("alphabetPosition", () => {
  it("should return the correct positions for a simple string", () => {
    assert.equal(alphabetPosition("abc"), "1 2 3");
  });

  it("should handle mixed case strings", () => {
    assert.equal(alphabetPosition("aBc"), "1 2 3");
  });

  it("should ignore non-alphabet characters", () => {
    assert.equal(alphabetPosition("a1b2c3"), "1 2 3");
  });

  it("should return an empty string for input with no alphabet characters", () => {
    assert.equal(alphabetPosition("123"), "");
  });

  it("should handle an empty string input", () => {
    assert.equal(alphabetPosition(""), "");
  });

  it("should handle strings with spaces", () => {
    assert.equal(alphabetPosition("a b c"), "1 2 3");
  });

  it("should handle strings with punctuation", () => {
    assert.equal(alphabetPosition("a,b.c!"), "1 2 3");
  });

  it("should handle the full alphabet", () => {
    assert.equal(
      alphabetPosition("abcdefghijklmnopqrstuvwxyz"),
      "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26"
    );
  });
});
