//First Idea:
//Should we construct a tree ? which search is O(logn) ?
//Oh.. but we need to adjust the 'Node', and the time complexity is O(m).
//'m' is the length of the each word.

//Note:
//1:Should use for(c of word){} when for-loop.
//2:Should pull out the overlap code into Traverse(word).

function TrieNode(children, isEndding) {
  this.children = children || {};
  this.isEndding = isEndding || false;
}

var Trie = function () {
  this.root = new TrieNode();
  //return this; //my fault
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    node.children[char] = node.children[char] || new TrieNode();
    node = node.children[char];
    if (i == word.length - 1) node.isEndding = true;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!node.children[char]) return false;
    node = node.children[char];
    if (i == word.length - 1 && !node.isEndding) return false;
  }
  return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];
    if (!node.children[char]) return false;
    node = node.children[char];
  }
  return true;
};

// TEST
const trie = new Trie();
trie.insert("apple");
console.log(trie);
console.log(trie.search("apple")); //true
console.log(trie.search("app")); //false
console.log(trie.startsWith("app")); //true
