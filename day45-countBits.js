//First Idea:
//O(nlogn) is an easy way, but can i implement it with O(n)?
//like D.P ? a[2],a[3] = a[0]+1, a[1]+1,
//Another point, '/2' == '>>1'

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
};

// Input: n = 5
// Output: [0,1,1,2,1,2]

console.log(countBits(5));
