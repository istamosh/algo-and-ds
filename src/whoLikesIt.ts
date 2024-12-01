export const whoLikesIt = (a: string[]): string => {
  const dict: { [key: number]: string } = {
    0: "no one likes this",
    1: "{0} likes this",
    2: "{0} and {1} like this",
    3: "{0}, {1} and {2} like this",
  };

  // display text based on the number of dict, if it's more then display like below
  const display = dict[a.length] || "{0}, {1} and {n} others like this";

  // replaces both {0-2} and {n} to the length-2 of array
  // otherwise, returns the 3rd individual name
  return display.replace(/{(\d|n)}/g, (_, count) =>
    count === "n" ? String(a.length - 2) : a[Number(count)]
  );
};

console.log(whoLikesIt(["Alice", "Bob"]));
