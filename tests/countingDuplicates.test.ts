import { assert } from "chai";

import { countingDuplicates } from "../src/countingDuplicates";

describe("example", function () {
  it("test", function () {
    assert.equal(countingDuplicates(""), 0);
    assert.equal(countingDuplicates("abcde"), 0);
    assert.equal(countingDuplicates("aabbcde"), 2);
    assert.equal(countingDuplicates("aabBcde"), 2, "should ignore case");
    assert.equal(countingDuplicates("Indivisibility"), 1);
    assert.equal(
      countingDuplicates("Indivisibilities"),
      2,
      "characters may not be adjacent"
    );
  });
});
