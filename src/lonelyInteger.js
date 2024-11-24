const lonelyInteger = (arr) => {
  let occurenceObj = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const findUnique = arr.filter((el) => occurenceObj[el] === 1);
  return findUnique[0];
};

module.exports = lonelyInteger;
