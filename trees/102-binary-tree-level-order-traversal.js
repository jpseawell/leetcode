// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// =====

// NOTE: This solution is a bit messy
// and took a couple of hours but I figured it out on my own with no assistance. 💪

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const q = [root];
  const levels = [];

  let level = 0;
  while (q.length) {
    const curr = q.shift();

    if (curr) {
      // Add real nodes or null if empty
      q.push(curr?.left || null);
      q.push(curr?.right || null);
    }

    // Add the curr node or null to current level
    if (!levels[level]) levels[level] = [];
    levels[level].push(!isNaN(curr?.val) ? curr.val : null);

    // check if current level (with nulls)
    // is equal to expected child length (2 slots per parent, e.g. parents * 2)
    const parents = levels[level - 1]?.length || 0;
    if (levels[level]?.length >= parents * 2) {
      levels[level] = levels[level].filter((n) => n !== null); // Filter out the nulls on each level reset
      level++;
    }
  }

  return levels.filter((lvl) => lvl.length > 0); // filter out empty leftover arrays
};
