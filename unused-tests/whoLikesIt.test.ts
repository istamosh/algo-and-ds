import { assert } from "chai";

import { whoLikesIt } from "../src/whoLikesIt";

describe("static tests", function () {
  it("should return correct text", function () {
    assert.equal(whoLikesIt([]), "no one likes this");
    assert.equal(whoLikesIt(["Peter"]), "Peter likes this");
    assert.equal(whoLikesIt(["Jacob", "Alex"]), "Jacob and Alex like this");
    assert.equal(
      whoLikesIt(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    assert.equal(
      whoLikesIt(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });
});
