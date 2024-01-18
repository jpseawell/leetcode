// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // base case
  if (!p && !q) return true; // structurally the same bc we're reaching empty nodes at the same time
  if (!p || !q) return false; // structurally not the same bc we're reaching empty nodes at diff times
  if (p.val !== q.val) return false; // contents are not the same

  // recursive case
  return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
};
