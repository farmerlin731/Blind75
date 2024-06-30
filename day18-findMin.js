//First Idea:
//Split into 2 parts
//And the minimum would happen in the part of 'left' > 'righ'.
//If they both aren't in this situation, compare their 'left'.
//Note: If not necessary, don't use recursion ,while-loop is better.

var findMin = function (nums) {
  if (nums.length == 1) return nums[0];

  let mid = Math.round(nums.length / 2) - 1;
  if (nums[0] > nums[mid]) {
    return findMin(nums.slice(0, mid + 1));
  } else if (nums[mid + 1] > nums[nums.length - 1]) {
    return findMin(nums.slice(mid + 1));
  }

  return Math.min(nums[0], nums[mid + 1]);
};

//Get improved, right? :)
var findMinBefore202304 = function (nums) {
  if (nums.length <= 3) {
    return Math.min(...nums);
  }
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let mid = Math.round(nums.length / 2) - 1;
  if (nums[mid] > nums[0]) {
    return findMin(nums.slice(mid + 1));
  } else {
    return findMin(nums.slice(0, mid + 1));
  }
};
var findMinBetterSolu = function (nums) {
  var left = 0,
    right = nums.length - 1;

  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

let nums = [4, 5, 6, 7, 0, 1, 2];
// let nums = [11, 13, 15, 17];
// let nums = [3, 4, 5, 1, 2];
// let nums = [2, 1];
console.log(findMin(nums));
