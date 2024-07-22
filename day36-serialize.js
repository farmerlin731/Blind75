//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
//First Idea:
//Maybe we can add 'L' or 'R' to classify the children?
//We can't get a tree from single 'in-order' or 'pre-order' array.
//Solu: Mark a symbol for 'Null' , and a leaf alway comes before two 'Mull'.

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let arr = [];
  function perOrder(node) {
    if (node == null) {
      arr.push("N");
      return;
    }
    arr.push(node.val);
    perOrder(node.left);
    perOrder(node.right);
  }
  perOrder(root);
  return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(",");
  let index = 0;
  function dfsConstruct() {
    const val = arr[index++];
    if (val == "N") return null;
    const node = new TreeNode(+val);
    node.left = dfsConstruct();
    node.right = dfsConstruct();
    return node;
  }
  return dfsConstruct();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Test Data
const node1 = new TreeNode(6);
const node2 = new TreeNode(2);
const node3 = new TreeNode(8);
const node4 = new TreeNode(0);
const node5 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(deserialize(serialize(node1)));
