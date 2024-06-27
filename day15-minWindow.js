//First Idea:
//Sliding window algo.
//Step1: Move 'right' until all char of 't' be founded.
//Step2: Move 'left' and keep the match result.
//Step3: Expand the 'right', when catch the key char, try to shrink the length.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let result = [-1, 0, 0]; // minlengh, left, right
  let criteria;
  let match = 0;

  const dictT = {};
  for (const char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  criteria = Object.keys(dictT).length;

  const dictS = {};
  while (right < s.length) {
    const charR = s[right];
    dictS[charR] = (dictS[charR] || 0) + 1;

    if (dictS[charR] == dictT[charR]) match++;
    // console.log(`right:${right}, match:${match}`);
    // console.log(`char:${charR}, ${dictS[charR]},${dictT[charR]}`);
    while (match == criteria) {
      //   console.log(`i am in , left:${left}, right:${right}`);
      if (result[0] == -1 || result[0] > right - left + 1) {
        result = [right - left + 1, left, right];
      }
      const charL = s[left];
      dictS[charL] = dictS[charL] - 1;
      if (dictS[charL] < dictT[charL]) match--;
      left++;
    }

    right++;
  }

  return result[0] == -1 ? "" : s.slice(result[1], result[2] + 1);
};

var minWindowBetterSolu = function (s, t) {
  if (!s || !t || s.length < t.length) return "";

  let l = 0,
    r = 0;
  let count = 0,
    minI = s.length + 1,
    minL = s.length + 1;

  const freqMap = {};
  for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1;

  while (r < s.length) {
    if (freqMap[s[r]]-- >= 1) count += 1;
    r += 1;

    while (count == t.length) {
      if (r - l < minL) {
        minL = r - l;
        minI = l;
      }
      if (freqMap[s[l]]++ == 0) count -= 1;
      l += 1;
    }
  }
  return s.slice(minI, minI + minL);
};

let s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
