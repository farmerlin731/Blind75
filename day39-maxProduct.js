//Concept:
//Three situation: Positive, Negative, Zero.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let preMax = (preMin = Max = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * preMax, nums[i] * preMin];
    preMax = Math.max(...options);
    preMin = Math.min(...options);
    Max = Math.max(preMax, Max);
  }
  return Max;
};
