//First Idea:
//Like previous question? but how to deal with the '.' ?
//Doesn't matter? just search every path?

function TrieNode(children, isEndding) {
  this.children = children || {};
  this.isEndding = isEndding || false;
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  //   let root = new TrieNode();
  //   let word = "bad";
  let cur = this.root;
  for (const char of word) {
    cur.children[char] = cur.children[char] || new TrieNode();
    cur = cur.children[char];
  }
  cur.isEndding = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function helper(node, index) {
    if (index == word.length) return node.isEndding;

    const char = word[index];
    if (char == ".") {
      const allChildren = Object.keys(node.children);
      for (const char of allChildren) {
        if (helper(node.children[char], index + 1)) return true;
      }
    } else {
      if (!node.children[char]) return false;
      return helper(node.children[char], index + 1);
    }

    return false;
  }
  return helper(this.root, 0);
};

const wordDic = new WordDictionary();
wordDic.addWord("bad");
console.log(wordDic.search(".ad"));
