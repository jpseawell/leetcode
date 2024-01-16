// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Result: Easy, but got it first try in 6 minutes. 😎
// ================

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  return walk(root, max);
};

function walk(node, height) {
  // Base Case:
  if (!node) return height;

  // Recusive Case:
  // Pre

  // In
  const lh = walk(node?.left, height + 1);
  const rh = walk(node?.right, height + 1);
  const h = Math.max(lh, rh);
  console.log(h);

  // Post

  return h;
}
