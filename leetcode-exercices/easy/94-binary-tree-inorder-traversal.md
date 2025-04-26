# 94. Binary Tree Inorder Traversal

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
var inorderTraversal = function (root) {
  let response = [];

  const transversal = (node) => {
    if (!node) return;
    transversal(node.left);
    response.push(node.val);
    transversal(node.right);
  };
  transversal(root);
  return response;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Every node is visited exactly once. For each node it visits the left child, process the current node (push), then visit the right child.
  <br>
  <br>
- **Space Complexity:** $O(n)$ <br>
  → 'response' array stores all n node values: O(n) space
  → Call stack (recursion), where the depth of the recursion depends on the height of the tree (h): O(h)
  → In the end: O(n) + O(h) → O(n), since Big O notation focuses on the dominant term, and as you add more nodes, the number of nodes (n) grows much faster than the height (h).
