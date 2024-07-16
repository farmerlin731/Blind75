//First Idea:
//Like BFS, and then remove the 'null' ?
//Set 2 arr, the first is the current level, and the second is the child level.

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];

  let curLevel = [root];
  let nextLevel = [];
  const ans = [[root.val]];

  while (curLevel.length != 0) {
    const curNode = curLevel.shift();
    nextLevel.push(curNode.left, curNode.right);
    if (curLevel.length == 0) {
      curLevel = nextLevel.filter((node) => node != null);
      if (curLevel.length != 0) ans.push(curLevel.map((node) => node.val));
      nextLevel = [];
    }
  }

  return ans;
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

console.log(levelOrder(node1));
