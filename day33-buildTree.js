//First Idea XD :
//First element in preorder is the root, and check the left and right part in inorder?
//Note:If u need to search 'index' many times, useing hashMap is a good choice!

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const hashMap = {};
  inorder.forEach((val, i) => (hashMap[val] = i));
  let head = 0;

  function helper(start, end) {
    if (start > end) return null;
    const node = new TreeNode(preorder[head++]);
    node.left = helper(start, hashMap[node.val] - 1);
    node.right = helper(hashMap[node.val] + 1, end);
    return node;
  }

  return helper(0, preorder.length - 1);
};

//GOD SOLU (TBD): https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/34543/simple-o-n-without-map/
var buildTreeGodSolu = function (preorder, inorder) {
  p = i = 0;
  build = function (stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
