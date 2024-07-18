//First Idea:
//Use in-order DFTT, and return value when catch Kth node?

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const dfsArr = [];
  let ans;
  function inOrder(node) {
    if (dfsArr.length >= k) return;
    if (node.left) inOrder(node.left);
    dfsArr.push(node.val);
    if (dfsArr.length == k) ans = dfsArr.at(-1);
    if (node.right) inOrder(node.right);
  }
  inOrder(root);
  return ans;
};

var kthSmallestIterativeFromLeetcode = function (root, k) {
  let count = 0;
  let curr = root;
  let stack = [];
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    count++;
    if (count == k) return curr.val;
    curr = curr.right;
  }
  return -1;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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

console.log(kthSmallest(node1, 1));
