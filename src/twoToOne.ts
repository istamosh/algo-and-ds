export const twoToOne = (s1: string, s2: string): string => {
  return Array.from(new Set(s1.concat(s2)))
    .sort()
    .join("");
};
