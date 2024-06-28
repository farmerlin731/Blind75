//Concept:
//Use stack, last in, first out.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) {
      stack.push(s[i]);
    } else {
      const openBracket = stack.pop();
      //   console.log(`prev:${openBracket} ,now:${s[i]}`);
      if (openBracket != dict[s[i]]) return false;
    }
  }

  return stack.length == 0;
};

var isValidBeAt2021 = function (s) {
  let map = {
    "(": 1,
    "[": 2,
    "{": 3,
    ")": -1,
    "]": -2,
    "}": -3,
  };

  let arrNew = s.split("").map((item) => map[item]);
  let tmpStack = [];
  let flag = true;
  arrNew.forEach((item) => {
    if (item > 0) {
      tmpStack.push(item);
      // console.log(`push: ${item}`);
    } else {
      // console.log(`rest: ${tmpStack}`);
      if (item + tmpStack.pop() != 0) {
        // console.log('fuck u region.');
        // console.log(`rest: ${tmpStack}`);
        // return false; // E04為什麼這個return沒有跑出來...
        // 因為你是在forEach中唷..傻孩子 XD @2024/06/28
        flag = false;
      }
    }
  });

  if (tmpStack.length != 0) flag = false;

  return flag;
};

// let s = "{([]]}";
let s = "()[]{}";
console.log(isValid(s));
