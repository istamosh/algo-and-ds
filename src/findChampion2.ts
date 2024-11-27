const findChampion = (n: number, edges: number[][]): number => {
  const losers = new Set<number>();
  for (const [, team2] of edges) {
    losers.add(team2);
  }

  let champion = -1;
  for (let i = 0; i < n; i++) {
    if (!losers.has(i)) {
      if (champion !== -1) {
        return -1;
      }
      champion = i;
    }
  }
  return champion;
};

export default findChampion;
