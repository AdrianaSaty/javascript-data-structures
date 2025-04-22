# 700. Search in a Binary Search Tree

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
var searchBST = function (root, val) {
  if (root === null || root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → In the worst case, it might have to check every node in the tree (if the value is not found or is in the deepest node). For n nodes in the tree O(n)

  <br>

- **Space Complexity:** $O(h)$ <br>
  → This is due to the call stack used in recursion where h = height of the tree.
