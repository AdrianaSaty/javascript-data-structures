# 701. Insert into a Binary Search Tree

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → The function follows one path down the tree (either left or right), comparing values
  → The number of steps = the height of the tree (h)
  <br>
  | Tree Type | Height (h) | Time Complexity |
  |--------------|------------|-----------------|
  | Balanced BST | O(log n) | O(log n) |
  | Skewed BST | O(n) | O(n) |
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Recursive calls use the call stack.
  → The maximum depth of recursion = height of the tree (h).
  <br>
  | Tree Type | Height (h) | Space Complexity |
  | ------------ | ---------- | ---------------- |
  | Balanced BST | O(log n) | O(log n) |
  | Skewed BST | O(n) | O(n) |
