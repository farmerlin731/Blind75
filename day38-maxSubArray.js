//First Idea:
//Sliding Window?

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= 0) continue;
    nums[i] += nums[i - 1];
  }
  return Math.max(...nums);
};

var maxSubArrayBefore = function (nums) {
  let total = 0;
  hightest = -10000;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (total > hightest) hightest = total;
    if (total < 0) {
      total = 0;
      continue;
    }
  }

  return hightest;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
