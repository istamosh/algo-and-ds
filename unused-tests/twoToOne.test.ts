import { twoToOne } from "../src/twoToOne";
import { assert } from "chai";

function testing(actual: string, expected: string) {
  assert.strictEqual(actual, expected);
}

describe("Fixed Tests", function () {
  it("Basic tests twoToOne", function () {
    testing(twoToOne("aretheyhere", "yestheyarehere"), "aehrsty");
    testing(
      twoToOne("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    testing(
      twoToOne("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
    testing(twoToOne("lordsofthefallen", "gamekult"), "adefghklmnorstu");
  });
});
