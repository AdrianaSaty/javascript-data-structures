# 226. Invert Binary Tree

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Every node in the tree is visited once. So with n total nodes, the total time is:
  <br>
- **Space Complexity:** $O(log n)$ or $O(n)$ <br>
  Space complexity is about how much memory your program uses while it runs — especially as the input gets bigger. But I'm not creating any big arrays or storing extra data… so why does this still use space? It’s because of something called the _call stack_. Every time your function calls itself, it says:
  “Let me pause here and go deeper first — I’ll come back later.”
  And to keep track of that pause, it stores some info (like where it was, and what variables it had) in a special memory area called the call stack.
  So every time invertTree() calls itself, it adds a little note to the stack — like a pile of sticky notes 📒. The more levels (depth) your tree has, the taller the stack gets.
  <br>
  <ins></ins>
  <br>
  <br>

- **Space Complexity for a balanced tree:** $O(log n)$ <br>

  ```javascript
       1
      / \
    2   3
   / \
  4   5
  ```

  - The tree is short and wide.<br>
  - The function only goes 3 levels deep.<br>
  - So the call stack only has 3 “stickies” at most.<br>
    → Low memory usage → $O(log n)$<br>

- **Space Complexity for a skewed Tree:** $O(n)$ <br>

  ```javascript
       1
        \
         2
          \
           3
            \
             4
  ```

  - The tree is long and narrow (like a list).<br>
  - The function goes all the way down, one by one.<br>
  - Each time it calls itself, it goes deeper — stacking up calls.<br>
    → High memory usage → O(n) (one call per node)<br>
