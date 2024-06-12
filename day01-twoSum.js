//First Idea:
//Use dictionary to check the complement .

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15],
  target = 9;

var twoSum = function (nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const comple = target - nums[i];
    if (dict.hasOwnProperty(comple)) {
      return [dict[comple], i];
    } else {
      dict[nums[i]] = i;
    }
  }
};

var twoSumByMeBefore = function (nums, target) {
  let ans;
  let tmp = [...nums].sort((a, b) => a - b);

  while (!ans) {
    let a = tmp[0];
    let b = tmp[tmp.length - 1];
    if (a + b == target) {
      ans = [a, b];
    } else if (a + b > target) {
      tmp.pop();
    } else {
      tmp.shift();
    }
  }

  let index = [0, 0];
  if (ans[0] == ans[1]) {
    index[0] = nums.indexOf(ans[0]);
    index[1] = nums.indexOf(ans[1], index[0] + 1);
  } else {
    index[0] = nums.indexOf(ans[0]);
    index[1] = nums.indexOf(ans[1]);
  }
  return index;
};

console.log(twoSum(nums, target));
