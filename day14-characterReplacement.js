//Concept:
//Use 'Sliding Windlow' Algo.
//Remember the char of 'start', and then move the 'end' index
//When the char of 'End' need to change k times more, move 'start'.
//Oh i got.. the maximum wouldn't increase when left move!
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
  const dict = {};
  let slow = 0;
  let maxFreq = 0;
  let maxLength = 0;
  let tmpStr = "";

  for (let fast = 0; fast < s.length; fast++) {
    dict[s[fast]] = (dict[s[fast]] || 0) + 1;
    maxFreq = Math.max(dict[s[fast]], maxFreq);
    //when it need (k+1) changes
    if (k < fast - slow + 1 - maxFreq) {
      dict[s[slow]]--;
      slow++;
    }
    if (fast - slow + 1 > maxLength) {
      maxLength = fast - slow + 1;
      tmpStr = s.slice(slow, fast + 1);
    }
  }

  console.log(maxLength);
  console.log(tmpStr);
  return maxLength;
};

let s = "AABABBA";
let k = 1;
characterReplacement(s, k);
