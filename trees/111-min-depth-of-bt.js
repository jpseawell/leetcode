// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

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
var minDepth = function (root) {
  if (!root) return 0;
  return walk(root, 0);
};

function walk(node, height) {
  if (!node) return Infinity; // Infinity so that it will fail in a min comparison
  if (!node?.left && !node?.right) return height + 1; // return height of leaf node

  // Increment height through DFS
  const lh = walk(node?.left, height + 1);
  const rh = walk(node?.right, height + 1);

  return Math.min(lh, rh);
}
