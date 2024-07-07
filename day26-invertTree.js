//Concept:
//Just use recursion to invert children.

var invertTree = function (root) {
  if (root == null) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//Create 'Test-Data' by myself.
function creatTree(depth) {
  if (depth == 0) return null;
  const val = ~~(Math.random() * 20);
  const root = new TreeNode(val);
  root.left = creatTree(depth - 1);
  root.right = creatTree(depth - 1);
  return root;
}

//Dreadth-First-Tree-Traversal
function DFTT(root) {
  const preOrder = (node, arr) => {
    if (node == null) return;
    arr.push(node.val);
    preOrder(node.left, arr);
    preOrder(node.right, arr);
  };
  const result = [];
  preOrder(root, result);
  return result;
}
const root = creatTree(3);
const dftt = DFTT(root);
console.log(root);
console.log(dftt);
invertTree(root);
const newDftt = DFTT(root);
console.log(newDftt);
