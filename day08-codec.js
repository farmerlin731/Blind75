//Concept @ explainThis:
//There r several ways to encode & decode..
//But u need to learn how to 'escape' in this problem.
//U can append the length of the words before them.
//271. Encode and Decode Strings

class Codec {
  constructor() {}

  static encode(strs) {
    let res = "";
    for (const str of strs) {
      let lenStr = String(str.length).padStart("3", "0");
      res = res + lenStr + str;
    }
    return res;
  }

  static decode(str) {
    let index = 0;
    const res = [];
    while (index < str.length) {
      let length = parseInt(str.slice(index, index + 3), 10);
      index += 3;
      let tmpStr = str.slice(index, index + length);
      res.push(tmpStr);
      index += length;
    }
    return res;
  }
}

//For Test
const strs = ["hello", "world:)"];
let encodedStr = Codec.encode(strs);
let decodeArr = Codec.decode(encodedStr);
console.log(encodedStr);
console.log(decodeArr);
