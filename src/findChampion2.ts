const findChampion = (n: number, edges: number[][]): number => {
  const candidates = new Set<number>();
  const losers = new Set<number>();
  for (const [team1, team2] of edges) {
    candidates.add(team1);
    losers.add(team2);
  }
  const filtered = Array.from(candidates).filter((el) => !losers.has(el));
  if (filtered.length === 1) {
    return filtered[0];
  }
  return -1;
};

export default findChampion;
