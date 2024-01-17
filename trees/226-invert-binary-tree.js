// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// ======

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  invertTree(root.left);
  invertTree(root.right);

  const l = root?.left;
  const r = root?.right;
  root.left = r;
  root.right = l;

  return root;
};

/**
 * NOTES:
 * - I struggled with this using breadth-first traversal for HOURS
 * - Once I discovered that this was a depth-first traversal problem I solved it in about 1 minute
 */
