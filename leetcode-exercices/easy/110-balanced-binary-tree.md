# 110. Balanced Binary Tree

## Solution

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true;

  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (Math.abs(left - right) > 1) {
      balanced = false;
    }
    return Math.max(left, right) + 1;
  };

  dfs(root);

  return balanced;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Each node is visited exactly once.
  <br>
- **Space Complexity:** $O(h)$ <br>
  → This is due to the call stack used in recursion where h = height of the tree.
