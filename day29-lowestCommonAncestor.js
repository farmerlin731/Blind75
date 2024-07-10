//First Idea:
//Use BFTT, transfer the tree image into an array.
//And check the overlap of the two nodes' ancesters.
//Oh...it's wrong XD. U should utilize the feature of BST.

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let cur = root;
  while (cur) {
    const [min, test, max] = [p.val, cur.val, q.val];
    if (test > min && test > max) {
      cur = cur.left;
    } else if (test < min && test < max) {
      cur = cur.right;
    } else {
      return cur;
    }
  }
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

console.log(lowestCommonAncestor(node1, node4, node5));
