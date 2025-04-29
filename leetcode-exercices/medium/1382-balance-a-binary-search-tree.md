# 1382. Balance a Binary Search Tree

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

const inOrder = (node, arr) => {
  if (!node) return;
  inOrder(node.left, arr);
  arr.push(node.val);
  inOrder(node.right, arr);
};

const createBalanceBST = (arr) => {
  if (arr.length === 0) return null;
  const midIndex = Math.floor(arr.length / 2);
  let head = new TreeNode(arr[midIndex]);
  head.left = createBalanceBST(arr.slice(0, midIndex));
  head.right = createBalanceBST(arr.slice(midIndex + 1));
  return head;
};

var balanceBST = function (root) {
  let arr = [];
  inOrder(root, arr);
  console.log(arr);
  return createBalanceBST(arr);
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n.log(n)) $ <br>
  → inOrder: visits every node exactly once. At each node, does constant work (push into array). O(n),
  where n = number of nodes in the tree.
  → createBalanceBST: At each level, you are doing O(n) work (copying elements via slice),
  and you have log n levels (because you split the array into half each time). O(n log n)
  → total: O(n) work per level and log n levels: O(nlogn)
  <br>

- **Space Complexity:** $O(n)$ <br>
  → Recursive Call Stack: maximum call stack depth = O(log n) for a balanced tree. In a skewed tree, it would be O(n)
  → Array Slices: every time you call .slice(), you create a new array that holds a copy of part of the original array.
  → New Tree Nodes: Every original value (arr[i]) becomes a TreeNode (new TreeNode(arr[mid])). Create one new TreeNode per array value, so, n nodes created. The total memory used by all slices across the whole recursion is O(n).
  → Total: O(n) + O(n) + O(n) = O(n)
