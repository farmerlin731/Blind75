//First Idea:
//Remove the 'non-alphanumeric characters', and transfer to lower case.
//The hardest point for me is regular expression... XD

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  let compactS = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let res = true;
  for (let i = 0; i < compactS.length; i++) {
    if (compactS[i] != compactS[compactS.length - 1 - i]) return false;
  }
  return true;
};

var isPalindromeAdvanced = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left++;
      continue;
    }
    if (!/[a-zA-Z0-9]/.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() != s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
// let s = " ";

// console.log(isPalindrome(s));
console.log(isPalindromeAdvanced(s));
