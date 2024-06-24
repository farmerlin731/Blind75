//Concept:
//Use 'sliding-window' algo
//Set the start & end at index-0 first,
//Then consider the situation of dulplicate word appear.
//Oh.. try to set the value be index ?

/**
 * @param {string} s
 * @return {number}
 */

// let s = "abcabcbb";
// let s = "bbbbb";
// let s = "pwwkew";
// let s = "au";
let s = " ";

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let ans = 0;
  let ansStr = "";
  let dict = new Map();
  while (end < s.length) {
    const newLetter = s[end];
    if (dict.get(newLetter) >= start) {
      //duplicated  appear
      if (end - start > ans) {
        ans = end - start;
        ansStr = s.slice(start, end);
      }
      start = dict.get(newLetter) + 1;
    }
    dict.set(newLetter, end);
    end++;
  }

  if (end - start > ans) {
    ans = end - start;
    ansStr = s.slice(start, end);
  }

  console.log("ans:", ans);
  console.log(ansStr);
  return ans;
};

lengthOfLongestSubstring(s);
