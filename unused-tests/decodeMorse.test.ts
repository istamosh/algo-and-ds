import { assert } from "chai";
import decodeMorse from "../src/decodeMorse";

describe("decodeMorse", () => {
  it("should decode single letters", () => {
    assert.equal(decodeMorse(".-"), "A");
    assert.equal(decodeMorse("-..."), "B");
    assert.equal(decodeMorse("-.-."), "C");
  });

  it("should decode spaced separator version", () => {
    assert.equal(decodeMorse(".-   .-"), "A A");
  });

  it("should decode spaced '/' separator version", () => {
    assert.equal(decodeMorse(".- / .-"), "A A");
  });

  it("should decode single digits", () => {
    assert.equal(decodeMorse("-----"), "0");
    assert.equal(decodeMorse(".----"), "1");
    assert.equal(decodeMorse("..---"), "2");
  });

  it("should decode special characters", () => {
    assert.equal(decodeMorse("...---..."), "SOS");
    assert.equal(decodeMorse(".-.-.-"), ".");
    assert.equal(decodeMorse("--..--"), ",");
  });

  it("should decode words", () => {
    assert.equal(decodeMorse(".... . .-.. .-.. ---"), "HELLO");
    assert.equal(decodeMorse(".-- --- .-. .-.. -.."), "WORLD");
  });

  it("should decode sentences", () => {
    assert.equal(
      decodeMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."),
      "HELLO WORLD"
    );
    assert.equal(
      decodeMorse(".-- . .-.. -.-. --- -- . / - --- / -.-. .... .- .."),
      "WELCOME TO CHAI"
    );
  });

  it("should handle empty input", () => {
    assert.equal(decodeMorse(""), "");
  });

  it("should handle unknown morse code", () => {
    assert.equal(decodeMorse("...---... ---"), "SOSO");
  });
});
