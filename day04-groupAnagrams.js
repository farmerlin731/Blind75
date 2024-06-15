//First Idea:
//Sort the each string and map them ? O(n) * (mlogm)
//2-dimension dict , can be fullfilled ?
//Solve it by hashmap with alphabet-oder key.. cool !
//Most of the solutions in Leetcode is using 'sort' ... and they r faster than me Q_Q

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// let strs = ["a"];
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  const mapOfAlphabet = Array(26).fill(0);
  const mapStrs = {};

  // mapOfAlphabet for each str
  // mapStrs for strs
  for (let i = 0; i < strs.length; i++) {
    let tmpMap = [...mapOfAlphabet];
    const baseAscii = "a".charCodeAt();
    for (let alpha of strs[i]) {
      tmpMap[alpha.charCodeAt() - baseAscii]++;
    }
    if (!mapStrs[tmpMap]) {
      mapStrs[tmpMap] = [strs[i]];
    } else {
      mapStrs[tmpMap].push(strs[i]);
    }
  }

  //Transfer the index map to result.
  const result = [];
  for (const key in mapStrs) {
    result.push(mapStrs[key]);
  }

  //   console.log(mapStrs);
  //   console.log(result);

  return result;
};

console.log(groupAnagrams(strs));
