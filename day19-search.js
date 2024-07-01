// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (nums[mid] > nums[left]) {
      //When left part is asending
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      //When right part is asending
      if (nums[mid + 1] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left] == target ? left : -1;
};

let nums = [1, 2, 4, 5, 6, 7, 0],
  target = 4;

console.log(search(nums, target));
