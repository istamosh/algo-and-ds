import { assert } from "chai";
import persistence from "../src/persistentBugger";

describe("Persistence Function", () => {
  it("should return 0 for single digit numbers", () => {
    assert.equal(persistence(5), 0);
    assert.equal(persistence(9), 0);
  });

  it("should return the correct persistence for multiple digit numbers", () => {
    assert.equal(persistence(39), 3);
    assert.equal(persistence(999), 4);
    assert.equal(persistence(25), 2);
  });

  it("should return 1 for numbers with digits as 111", () => {
    assert.equal(persistence(111), 1);
  });

  it("should handle large numbers correctly", () => {
    assert.equal(persistence(277777788888899), 11);
  });

  it("should return 0 for zero", () => {
    assert.equal(persistence(0), 0);
  });
});
