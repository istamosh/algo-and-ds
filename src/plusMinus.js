const plusMinus = (arr) => {
  let length = arr.length;
  let positives = 0;
  let negatives = 0;
  let zeroes = 0;
  for (let el of arr) {
    if (el > 0) positives++;
    else if (el < 0) negatives++;
    else zeroes++;
  }
  console.log(
    `${(positives / length).toFixed(6)}\n${(negatives / length).toFixed(6)}\n${(
      zeroes / length
    ).toFixed(6)}`
  );
};

module.exports = plusMinus;
