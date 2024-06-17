//First Idea:
//Create a map for recording frequency of each element.\
//And there 2 ways to compare frequency:
//1: Transfer the frequency to array's index.
//2: Sort the contents of map by Map.entries().
//Finally, choose the k'th biggest index.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

var topKFrequent = function (nums, k) {
  // const freqMap = nums.reduce((map, num) => {
  //   map.set(num, (map.get(num) || 0) + 1);
  //   return map;
  // }, new Map());

  const freqMap = new Map();
  const res = [];
  nums.forEach((num) => freqMap.set(num, (freqMap.get(num) || 0) + 1));
  const freqSorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k && i < freqSorted.length; i++) {
    res.push(freqSorted[i][0]);
  }
  return res;
};

console.log(topKFrequent(nums, k));
