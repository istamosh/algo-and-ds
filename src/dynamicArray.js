const dynamicArray = (n, queries) => {
  let lastAnswer = 0;
  // instantiate a 2D array like this [ [], [] ] with n number of empty arrays
  let arr = Array.from({ length: n }, () => []);
  let results = [];

  for (let query of queries) {
    // named destructuring
    let [queryType, x, y] = query;
    let index = (x ^ lastAnswer) % n;

    if (queryType === 1) {
      arr[index].push(y);
    } else {
      lastAnswer = arr[index][y % arr[index].length];
      results.push(lastAnswer);
    }
  }
  return results;
};

module.exports = dynamicArray;
