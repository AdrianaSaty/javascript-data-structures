# 450. Delete Node in a BST

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left) {
      return root.right;
    } else if (!root.right) return root.left;
    else {
      let current = root.right;
      while (current.left) {
        current = current.left;
      }
      root.val = current.val;
      root.right = deleteNode(root.right, current.val);
    }
  }
  return root;

  return root;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → 1. Finding the node to delete: the function recursively traverses down the tree to find the node with the target key. This traversal takes O(h) time, where h is the height of the tree.
  → 2. Handling node with two children: find the in-order successor (smallest node in the right subtree): This involves traversing down the leftmost path of the right subtree. The time taken is O(h) again, where h is the height of that subtree.
  → Result: Total Time Complexity = O(h) + O(h) = O(h)
  <br>
  | Tree Type | Time Complexity |
  |--------------|-----------------|
  | Balanced BST | O(log n) |
  | Skewed BST | O(n) |

- **Space Complexity:** $O(n)$ <br>
  → This is due to the recursion call stack, which depends on the height (h) of the tree. No extra data structures are used — just recursion
  | Tree Type | Time Complexity |
  |--------------|-----------------|
  | Balanced BST | O(log n) |
  | Skewed BST | O(n) |
