//Note:
//Should notice the 'Null', it doesn't have any property.

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  //The following is more beautiful. :) @ Leetcode's solution
  //if (!node1 || !node2) return !node1 && !node2;
  if (Object.is(p, null) && Object.is(q, null)) return true;
  if (Object.is(p, null) || Object.is(q, null)) return false;
  return (
    p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  );
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function creatTreeA() {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  node1.left = node2;
  node1.right = node3;

  return node1;
}

function creatTreeB() {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  node1.left = node2;
  node1.right = node3;
  //   const node4 = new TreeNode(5);
  //   node2.left = node4;

  return node1;
}

const root = creatTreeA();
const root2 = creatTreeB();
console.log(root);
console.log(root2);
console.log(isSameTree(root, root2));
