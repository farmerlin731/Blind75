//First Idea:
//Construct dictionary of 's'
//And then iterate 't' and compare it to dictS.
//There is a solution in Leetcode which use sort and compare them.
//But I think the time complexity is O(nlogn) ..

let s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  const dictS = {};
  for (let i of s) {
    dictS[i] = (dictS[i] || 0) + 1;
  }

  for (let i of t) {
    if (dictS[i]) {
      dictS[i]--;
    } else {
      //An alphabet in 't' is more than which in 's'.
      return false;
    }
  }
  return true;
};

var isAnagramBefore = function (s, t) {
  if (s.length != t.length) return false;
  const dictS = {},
    dictT = {};

  for (let i of s) {
    dictS[i] = dictS.hasOwnProperty(i) ? dictS[i] + 1 : 1;
  }
  for (let i of t) {
    dictT[i] = dictT.hasOwnProperty(i) ? dictT[i] + 1 : 1;
  }

  for (let key in dictS) {
    if (dictS[key] != dictT[key]) return false;
  }
  return true;
};

console.log(isAnagram(s, t));
