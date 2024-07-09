//Concept:
//Use DFS/BFS to check if the noot(&children) is equal to subRoot.

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSubtreeByBFS = function (root, subRoot) {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    // PlanA: don't push 'null'.
    // if (node.left) queue.push(node.left);
    // if (node.right) queue.push(node.right);

    // PlanB: ignore 'null' after shilt().
    if (!node) continue;
    queue.push(node.left, node.right);

    if (isSameTree(node, subRoot)) return true;
  }
  return false;
};

function isSameTree(nodeA, nodeB) {
  if (!nodeA || !nodeB) return !nodeA && !nodeB;
  return (
    nodeA.val == nodeB.val &&
    isSameTree(nodeA.left, nodeB.left) &&
    isSameTree(nodeA.right, nodeB.right)
  );
}

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
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  return node1;
}

function creatTreeB() {
  const node1 = new TreeNode(2);
  const node2 = new TreeNode(4);
  const node3 = new TreeNode(5);
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
console.log(isSubtree(root, root2));
