export class Kata {
  static dnaStrand(dna: string) {
    // replace all chars with the callback
    // that maps the char conversions,
    // if it's not available inside list
    // returns empty string (not space)
    return dna.replace(
      /./g,
      (char) =>
        ({
          A: "T",
          T: "A",
          C: "G",
          G: "C",
        }[char] || "")
    );
  }
}
