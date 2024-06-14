//First Idea:
//Use 'Set()' and then check the length.

let nums = [1, 2, 3, 1];

const compact = Array.from(new Set(nums));

//Oh,, i can check the set.size directly QQ
var containsDuplicate = function (nums) {
  const compact = Array.from(new Set(nums));
  return compact.length != nums.length;
};

// One year ago (2023/01..), much cleaner now XD
var containsDuplicateBefore = function (nums) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (dict.hasOwnProperty(key)) return true;
    dict[key] = 1;
  }
  return false;
};

console.log(containsDuplicate(nums));
