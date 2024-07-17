//First Idea:
//Use DFTT(mid), and then check if the output is ascending?
//Or Just need set a variable and compare it to current node? -> but it need go through all tree.

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const stack = [[root, -Infinity, Infinity]];

  while (stack.length != 0) {
    const [curNode, min, max] = stack.pop();
    // console.log(`In! - ${curNode.val}`);
    if (!isRange(curNode, min, max)) return false;
    // if (!isRange(curNode, min, max)) flag = false;
    if (curNode.left) stack.push([curNode.left, min, curNode.val]);
    if (curNode.right) stack.push([curNode.right, curNode.val, max]);
  }
  return true;
};

function isRange(node, min, max) {
  //   console.log(arguments);
  return node.val > min && node.val < max;
}

var isValidBSTFromLeetcode = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
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
// const node5 = new TreeNode(9);
const node5 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(isValidBST(node1));
