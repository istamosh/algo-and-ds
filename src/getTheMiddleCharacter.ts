export default function getTheMiddleCharacter(s: string): string {
  if (s.length === 0) return "";
  if (s.length % 2 === 0) return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  else return s[s.length / 2 - 0.5];
}
