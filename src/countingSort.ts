const countingSort = (arr: number[]): number[] => {
  // Hackkerrank note: always return 100 in length
  let frequencyArr = Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i]]++;
  }
  return frequencyArr;

  //   if you want to test it out
  //   let sorted = [];
  //   for (let i = 0; i < frequencyArr.length; i++) {
  //     while (frequencyArr[i] > 0) {
  //       sorted.push(i);
  //       frequencyArr[i]--;
  //     }
  //   }
  //   return sorted;
};

export default countingSort;
