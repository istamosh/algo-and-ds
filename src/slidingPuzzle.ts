type Board = number[][];
type Pos = [number, number];

// flatten to x,x,x,x,x,x to make it easier
const serialize = (arr: Board): string =>
  arr.reduce((acc, val) => acc.concat(val), []).join(",");

// deserializator
const deSerialize = (str: string): Board => {
  // return back to [x,x,x,x,x,x] -> [[x,x,x], [x,x,x]]
  const arr = str.split(",").map(Number);
  return [arr.slice(0, 3), arr.slice(3)];
};

const zeroCoord = (board: Board): Pos => {
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] === 0) return [i, j];

  throw new Error("There is no 0");
};

const slidingPuzzleWithPractice = (
  board: Board
): { moves: number; pattern: string[] } => {
  // zero will move to either -y, -x, y, or x
  const navigations: Pos[] = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const breakdownArr = serialize(board);

  // make an arr for mapping & recording moves
  const queueArr: [string, number, string[]][] = [[breakdownArr, 0, []]];

  // make a Set(1) { "a,b,c,d,e,x" } to prevent visiting a pattern twice
  const visited = new Set<string>([breakdownArr]);

  // while the array is still exists
  while (queueArr.length > 0) {
    // the value for shifting will not be null
    // consume the queue from the first for processing
    const [currState, moves, pattern] = queueArr.shift()!;

    // check if the board is correct
    if (currState === "1,2,3,4,5,0") return { moves, pattern };

    // rebuild an array out of current state and find zero coord.
    const currBoard = deSerialize(currState);
    const [row, col] = zeroCoord(currBoard);

    // BFS starts
    // loop through navigations
    for (const [x, y] of navigations) {
      const newRow = row + x;
      const newCol = col + y;

      // check if the navs are still within 2x3 space
      if (newRow >= 0 && newRow < 2 && newCol >= 0 && newCol < 3) {
        // create a deep copy of test board
        const newBoard = currBoard.map((row) => row.slice());

        // newBoard[row][col] = 0, [newRow][newCol] = adjacent from 0 (Up/Down/R/L)
        // swap places
        [newBoard[row][col], newBoard[newRow][newCol]] = [
          newBoard[newRow][newCol],
          newBoard[row][col],
        ];

        // if the visited patterns haven't exist yet, add one to the set, Set(2) { 'a,b,c,d,e,x', 'a,b,c,d,x,e' }
        // if it's already visited, the loop will not store for further queue
        const newSerialized = serialize(newBoard);
        if (!visited.has(newSerialized)) {
          visited.add(newSerialized);

          // also add the current board and move states add moves by 1
          queueArr.push([
            newSerialized,
            moves + 1,
            pattern.concat(newSerialized),
          ]);
        }
      }
    }
  }

  // if no move is found
  return { moves: -1, pattern: [] };
};

const slidingPuzzle = (board: Board): number => {
  // zero will move to either -y, -x, y, or x
  const navigations: Pos[] = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const breakdownArr = serialize(board);

  // make an arr for mapping & recording moves
  const queueArr: [string, number][] = [[breakdownArr, 0]];

  // make a Set(1) { "a,b,c,d,e,x" } to prevent visiting a pattern twice
  const visited = new Set<string>([breakdownArr]);

  // while the array is still exists
  while (queueArr.length > 0) {
    // the value for shifting will not be null
    // consume the queue from the first for processing
    const [currState, moves] = queueArr.shift()!;

    // check if the board is correct
    if (currState === "1,2,3,4,5,0") return moves;

    // rebuild an array out of current state and find zero coord.
    const currBoard = deSerialize(currState);
    const [row, col] = zeroCoord(currBoard);

    // BFS starts
    // loop through navigations
    for (const [x, y] of navigations) {
      const newRow = row + x;
      const newCol = col + y;

      // check if the navs are still within 2x3 space
      if (newRow >= 0 && newRow < 2 && newCol >= 0 && newCol < 3) {
        // create a deep copy of test board
        const newBoard = currBoard.map((row) => row.slice());

        // newBoard[row][col] = 0, [newRow][newCol] = adjacent from 0 (Up/Down/R/L)
        // swap places
        [newBoard[row][col], newBoard[newRow][newCol]] = [
          newBoard[newRow][newCol],
          newBoard[row][col],
        ];

        // if the visited patterns haven't exist yet, add one to the set, Set(2) { 'a,b,c,d,e,x', 'a,b,c,d,x,e' }
        // if it's already visited, the loop will not store for further queue
        const newSerialized = serialize(newBoard);
        if (!visited.has(newSerialized)) {
          visited.add(newSerialized);

          // also add the current board and move states add moves by 1
          queueArr.push([newSerialized, moves + 1]);
        }
      }
    }
  }

  // if no move is found
  return -1;
};

export default slidingPuzzle;
