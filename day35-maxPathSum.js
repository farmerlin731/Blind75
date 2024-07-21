//First Idea:
//Bottom-Up to compute the maximum value for each node ?
//Use Recursive!
//There is one point! Shoule pick the maxixmum 'left+right+self' at each nodes.

/**
 * @param {TreeNode} root
 * @return {number}
 */
// Why do i get a 'overtime' Q_Q
var maxPathSum = function (root) {
  let selfMax = -Infinity;
  function tmpMax(node) {
    console.log(`cur:${node?.val}`);
    if (node == null) return 0;
    // Oh.. maybe i compute twice @ this line Q_Q
    // const leftVal = tmpMax(node.left) < 0 ? 0 : tmpMax(node.left);
    let leftVal = tmpMax(node.left);
    let rightVal = tmpMax(node.right);
    leftVal = Math.max(0, leftVal);
    rightVal = Math.max(0, rightVal);
    selfMax = Math.max(selfMax, node.val + leftVal + rightVal);
    return node.val + Math.max(leftVal, rightVal);
  }
  tmpMax(root);
  return selfMax;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test Data
// const node1 = new TreeNode(6);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(8);
// const node4 = new TreeNode(0);
// const node5 = new TreeNode(4);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;

const node1 = new TreeNode(2);
const node2 = new TreeNode(-1);
node1.right = node2;

console.log(maxPathSum(node1));
