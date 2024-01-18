// 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.
// =====

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return walk(root, 0, targetSum);
};

function walk(node, sum, target) {
  // base case
  if (!node) return false;
  if (sum + node?.val === target && !node.right && !node.left) return true;

  // recursive case
  return (
    walk(node?.left, sum + node.val, target) ||
    walk(node?.right, sum + node.val, target)
  );
}
