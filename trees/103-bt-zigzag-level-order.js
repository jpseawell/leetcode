// 103. Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const levels = [];
  const q = [root];

  let i = 0;
  while (q.length) {
    const curr = q.shift();

    if (curr) {
      q.push(curr?.left || null);
      q.push(curr?.right || null);
    }

    console.log(i, levels);
    if (!levels[i]) levels[i] = [];
    levels[i].push(curr?.val);

    const parents = levels[i - 1]?.length || 0;
    if (levels[i].length >= parents * 2) {
      levels[i] = levels[i].filter((n) => !isNaN(n));
      if ((i + 1) % 2 === 0) levels[i] = levels[i].reverse();
      i++;
    }
  }

  return levels.filter((l) => l.length > 0);
};
