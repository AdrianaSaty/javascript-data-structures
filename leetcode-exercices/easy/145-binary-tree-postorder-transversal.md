# 145. Binary Tree Postorder Traversal

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const response = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    response.push(node.val);
  };
  dfs(root);
  return response;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Every node is visited exactly once
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Call stack (recursion), where the depth of the recursion depends on the height of the tree (h): O(h)
