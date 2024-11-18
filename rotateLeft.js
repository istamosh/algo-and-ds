const rotateLeft = (d, arr) => {
  if (arr.length < 2 || d === arr.length) {
    return arr;
  }
  let count = d;
  if (count > arr.length) {
    count = d % arr.length;
  }

  return arr.slice(count).concat(arr.slice(0, count));
};

module.exports = rotateLeft;
