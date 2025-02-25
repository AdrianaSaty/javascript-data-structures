# 20. Valid Parentheses

## Solution - Stack

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let bracket of s) {
    if (bracket === "(") {
      stack.push(")");
    } else if (bracket === "[") {
      stack.push("]");
    } else if (bracket === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== bracket) {
      return false;
    }
  }
  return stack.length === 0;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/valid-parentheses/solutions/6410376/easy-solution-best-performance-by-infoad-cls5/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Ee iterate through the string only once.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → In the worst case (when all characters are opening brackets, they are stored in the stack).
