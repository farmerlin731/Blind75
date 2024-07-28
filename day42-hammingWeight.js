//First Idea:
//For Loop and count the  (i mod 2)==1 ?

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    if ((n & 1) == 1) count++;
    n >>= 1;
  }
  return count;
};

let n = 11;
console.log(hammingWeight(n));
