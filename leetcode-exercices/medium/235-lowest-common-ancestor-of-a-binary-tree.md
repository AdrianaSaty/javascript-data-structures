# 235. Lowest Common Ancestor of a Binary Search

## Solution

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
```

## Solution - same, but calling DFS

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const DFS = (node) => {
    if (!node) return null;

    if (p.val < node.val && q.val < node.val) {
      return DFS(node.left);
    } else if (p.val > node.val && q.val > node.val) {
      return DFS(node.right);
    } else {
      return node;
    }
  };

  return DFS(root);
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(h) $ <br>
  → At each step it makes one comparison and go down one level. So time complexity is O(h), where h is the height of the tree:
  | Tree Type | Height (h) | Space Complexity |
  | ------------ | ---------- | ---------------- |
  | Balanced BST | O(log n) | O(log n) |
  | Skewed BST | O(n) | O(n) |

- **Space Complexity:** $O(h)$ <br>
  → The only space used is the call stack due to recursion, is proportional to height of the tree. So it is O(h), where h is the height of the tree.
  <br>
  <br>

### Note: this is not a normal dfs

Although this function is called DFS, it is not a classic DFS that explores both left and right subtrees.
Instead, it follows the BST property and traverses only one path down the tree, based on the values of p and q.
This is best described as a "BST-guided DFS" or simply a "binary search path" — not a BFS, since we are not visiting nodes level by level.
