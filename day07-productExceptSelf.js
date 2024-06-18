// (Remember it while i see the arrR & arrL XD)
// No division here.
// Seems like DP ?
// If the extra space is O(1).. u should manipulate the output array directly.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let nums = [-1, 1, 0, -3, 3];
let nums = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  let result = Array(nums.length);

  result[0] = 1;
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] *= right;
    if (result[i] == -0) result[i] = 0;
    right *= nums[i];
  }
  return result;
};

var productExceptSelfBefore = function (nums) {
  let arrL = Array(nums.length).fill(1);
  let arrR = Array(nums.length).fill(1);
  let ans = Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    arrL[i] = arrL[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    arrR[i] = arrR[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = arrL[i] * arrR[i];
    ans[i] = ans[i] == -0 ? 0 : ans[i];
  }
  return ans;
};

console.log(productExceptSelf(nums));
