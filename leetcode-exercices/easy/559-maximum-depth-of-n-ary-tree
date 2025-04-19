# 559. Maximum Depth of N-ary Tree

## Solution

```javascript
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let response = 0;

  const DFS = (node, depth) => {
    if (!node) return 0;
    response = Math.max(response, depth + 1);
    node.children.map((child) => {
      DFS(child, depth + 1);
    });
  };

  DFS(root, 0);
  return response;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Each node is visited once, and .map() processes each child exactly once.
  → So if the tree has n nodes, the total work is linear in the number of nodes.
  <br>
- **Space Complexity:** $O(h)$ <br>
  → The space used is mainly from the recursive call stack.
  → In the worst case (e.g., a skewed tree), the stack goes as deep as the height of the tree, h.
  → No extra space is used apart from scalars and recursion.
