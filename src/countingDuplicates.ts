export const countingDuplicates = (text: string): number => {
  let count = 0;

  // map char occurences
  const occurrenceChar = Array.from(text.toLowerCase()).reduce(
    (accumulator: { [key: string]: number }, el) => {
      accumulator[el] = (accumulator[el] || 0) + 1;
      return accumulator;
    },
    {}
  );

  // iterate map values that are above 1
  for (const key in occurrenceChar) {
    if (occurrenceChar.hasOwnProperty(key) && occurrenceChar[key] > 1) {
      count++;
    }
  }

  return count;
};

// from https://www.codewars.com/users/JonnathanLS
export const cleverVersion = (text: string): number => {
  const values = text.toLowerCase();
  const distinctValues = [...new Set(values)];
  const count = (s: string) => values.split(s).length - 1 > 1;
  return distinctValues.filter((value) => count(value)).length;
};
