//First Idea:
//How not to use '+' operation Q_Q
//2-based?

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let carry;
  while ((a & b) != 0) {
    carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }
  return a ^ b;
};

const getSumRecur = (a, b) => (b ? getSumRecur(a ^ b, (a & b) << 1) : a);

let a = 3;
let b = 7;
// console.log(getSum(a, b));
console.log(getSumRecur(a, b));
