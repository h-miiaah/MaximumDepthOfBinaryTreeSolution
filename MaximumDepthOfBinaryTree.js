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
 var maxDepth = function(root) {
    return rootFinder(root, 0);
};

var rootFinder = function (root, level) {
    if (!root) return level;
    return Math.max(rootFinder(root.left, level + 1), rootFinder(root.right, level + 1));
  };


/*

- We start with a function that takes in a node and a depth.
- If the node is null, we return the depth.
- Otherwise, we recursively call the function with the node’s left and right children and the depth + 1.
- The function returns the maximum of the left and right depths.
- We call the function with the root and 0.
- Finally the maxDepth function returns the maximum depth.

*/