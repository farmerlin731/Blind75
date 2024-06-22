//Concept:
//Time complexity is omega(n2) , so u can sort it first.
//Fix the start ,and calculate '2-sum' for the rest of elements by 2-pointer.
//Need to consider the situation u can skip.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [0, 1, 1];
// let nums = [0, 0, 0];

var threeSum = function (nums) {
  const ans = [];

  nums.sort((a, b) => a - b);

  for (let head = 0; head < nums.length - 2; head++) {
    if (nums[head] > 0) break;
    let mid = head + 1,
      tail = nums.length - 1;
    while (mid < tail) {
      let sum = nums[head] + nums[mid] + nums[tail];
      if (sum == 0) {
        ans.push([nums[head], nums[mid], nums[tail]]);
        //Skip some situation @ inner-loop
        while (nums[mid + 1] == nums[mid]) mid++;
        while (nums[tail - 1] == nums[tail]) tail--;
        mid++;
        tail--;
      } else if (sum < 0) mid++;
      else tail--;
    }
    //Skip some situation @ outer-loop
    while (nums[head + 1] == nums[head]) head++;
  }

  return ans;
};

console.log(threeSum(nums));
