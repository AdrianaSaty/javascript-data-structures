# 257. Binary Tree Paths

#binary-tree #dfs

## Solution

It performs a depth-first search (DFS) starting from the root, carrying along the current path as a string.  
When it reaches a leaf node (no left and right children), it adds the constructed path to the result list.  
The path string is built incrementally during recursion, using `"->"` to connect node values.

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = []

  const dfs = (node, path) => {
    if (!node) return
    const newPath = path.length === 0 ? `${node.val}` : `${path}->${node.val}`
    if (!node.left && !node.right) {
      paths.push(newPath)
      return
    }
    dfs(node.left, newPath)
    dfs(node.right, newPath)
  }
  dfs(root, "")
  return paths
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/binary-tree-paths/submissions/1730613971/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Each node is visited exactly once, performing constant-time operations (string concatenation and checks) at each visit.  
  <br>
  <br>
- **Space Complexity:** $O(n)$ <br>
  → In the worst case (completely skewed tree), the recursion stack can hold up to $n$ frames.  
  The space used to store the result paths is also $O(n)$ in total length of node values.  
  <br>

 <br>
 <br>
