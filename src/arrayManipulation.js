const arrayManipulation = (n, queries) => {
  // create new array length based on the n param, fill elements with int 0
  let arr = new Array(n).fill(0);

  for (let [a, b, k] of queries) {
    // fill the starting index with k until the ending index
    arr[a - 1] += k;

    // undo the k starting from the next index of the ending index
    b < n && (arr[b] -= k);
  }

  let max = 0;
  let current = 0;

  for (let el of arr) {
    // assign current starting from 0 while iterating
    current += el;
    current > max && (max = current);
  }
  return max;
};

module.exports = arrayManipulation;
