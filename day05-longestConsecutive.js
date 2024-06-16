//First Idea:
//O(n) -> u can't sort
//Use set, and iterate it to find LC (by sliding window.)
//Need to delete key
//Solu in explainThis is interesting, first find left, and expand it.

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutiveByMeOri = function (nums) {
  let tmpSet = new Set(nums);
  let tmpArr = Array.from(tmpSet);
  let maxLength = 0;
  for (let start of tmpArr) {
    if (!tmpSet.has(start)) {
      console.log(`${start} already checked.`);
      continue;
    }
    tmpSet.delete(start);
    let left = start,
      right = start;
    while (tmpSet.has(left - 1)) {
      left--;
      tmpSet.delete(left);
    }

    while (tmpSet.has(right + 1)) {
      right++;
      tmpSet.delete(right);
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  //   console.log(maxLength);
  return maxLength;
};

var longestConsecutive = function (nums) {
  let tmpSet = new Set(nums);
  let maxLength = 0;
  for (const num of [...tmpSet]) {
    if (tmpSet.has(num - 1)) continue;
    let right = num;
    while (tmpSet.has(right + 1)) {
      right++;
    }
    maxLength = Math.max(right - num + 1, maxLength);
  }
  return maxLength;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
