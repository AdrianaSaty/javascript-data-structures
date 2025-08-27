# 20. Valid Parentheses

#easy #string #stack #monotonic-stack

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
• Open brackets must be closed by the same type of brackets.
• Open brackets must be closed in the correct order.
• Every close bracket has a corresponding open bracket of the same type.

**Example 1:**  
Input: s = "()"  
Output: true

**Example 2:**  
Input: s = "()[]{}"  
Output: true

**Example 3:**  
Input: s = "(]"  
Output: false

**Example 4:**  
Input: s = "([])"  
Output: true

**Example 5:**  
Input: s = "([)]"  
Output: false

**Constraints:**  
• 1 <= s.length <= 10^4
• s consists of parentheses only '()[]{}'.

## Solution - Stack

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []

  for (let bracket of s) {
    if (bracket === "(") {
      stack.push(")")
    } else if (bracket === "[") {
      stack.push("]")
    } else if (bracket === "{") {
      stack.push("}")
    } else if (stack.length === 0 || stack.pop() !== bracket) {
      return false
    }
  }
  return stack.length === 0
}
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/valid-parentheses/solutions/6410376/easy-solution-best-performance-by-infoad-cls5/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Ee iterate through the string only once.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → In the worst case (when all characters are opening brackets, they are stored in the stack).
