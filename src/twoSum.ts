type Hashmap = {
  [key: number]: number;
};

// will return array number of any length
const twoSum = (nums: number[], target: number): number[] => {
  let dict: Hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[target - nums[i]] !== undefined)
      return [dict[target - nums[i]], i];
    dict[nums[i]] = i;
  }
  return [];
};

export default twoSum;
