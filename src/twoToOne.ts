export const twoToOne = (s1: string, s2: string): any => {
  return Array.from(new Set(s1.concat(s2)))
    .sort()
    .join("");
};
