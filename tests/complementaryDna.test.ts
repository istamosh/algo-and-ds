import { Kata } from "../src/complementaryDna";
import { assert } from "chai";

describe("dnaStrand", function () {
  it("Sample tests", function () {
    assert.strictEqual(Kata.dnaStrand("AAAA"), "TTTT", "String AAAA is");
    assert.strictEqual(Kata.dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
    assert.strictEqual(Kata.dnaStrand("GTAT"), "CATA", "String GTAT is");
  });

  it("Edge cases", function () {
    assert.strictEqual(
      Kata.dnaStrand(""),
      "",
      "Empty string should return empty string"
    );
    assert.strictEqual(
      Kata.dnaStrand("A"),
      "T",
      "Single character A should return T"
    );
    assert.strictEqual(
      Kata.dnaStrand("T"),
      "A",
      "Single character T should return A"
    );
    assert.strictEqual(
      Kata.dnaStrand("C"),
      "G",
      "Single character C should return G"
    );
    assert.strictEqual(
      Kata.dnaStrand("G"),
      "C",
      "Single character G should return C"
    );
  });

  it("Mixed cases", function () {
    assert.strictEqual(Kata.dnaStrand("ATCG"), "TAGC", "String ATCG is");
    assert.strictEqual(Kata.dnaStrand("CGTA"), "GCAT", "String CGTA is");
    assert.strictEqual(Kata.dnaStrand("TACG"), "ATGC", "String TACG is");
  });

  it("Longer sequences", function () {
    assert.strictEqual(
      Kata.dnaStrand("ATCGATCG"),
      "TAGCTAGC",
      "String ATCGATCG is"
    );
    assert.strictEqual(
      Kata.dnaStrand("GATTACA"),
      "CTAATGT",
      "String GATTACA is"
    );
  });
});
