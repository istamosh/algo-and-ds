export default function alphabetPosition(text: string): string {
  return text
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) - 64)
    .join(" ");
}
