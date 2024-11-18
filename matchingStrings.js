const matchingStrings = (stringList, queries) => {
  const counterMap = {};
  stringList.forEach((element) => {
    counterMap[element] = (counterMap[element] || 0) + 1;
  });
  return queries.map((query) => counterMap[query] || 0);
};

module.exports = matchingStrings;
