# 104. Maximum Depth of Binary Tree

## Solution - first try

```javascript
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
  if (!root) return 0;
  let maximumDepth = 0;

  const bfs = (node, depthNumber) => {
    if (node?.left === null && node?.right === null) {
      maximumDepth = Math.max(maximumDepth, depthNumber);
    }

    node?.left && bfs(node.left, depthNumber + 1);
    node?.right && bfs(node.right, depthNumber + 1);
  };

  bfs(root, 0);

  return maximumDepth + 1;
};
```

## Solution - refactored

```javascript
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
  if (!root) return 0;
  const left = 1 + maxDepth(root.left);
  const right = 1 + maxDepth(root.right);
  return Math.max(left, right);
};
```

### 📈 Complexity Analysis (same for both)

- **Time Complexity:** $ O(n) $ <br>
  → It has to visit each node once
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Stack frames grow linearly with the depth of the tree.
