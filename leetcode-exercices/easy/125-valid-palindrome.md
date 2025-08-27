# 125. Valid Palindrome

#easy #string #two-pointers #palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

**Example 1:**  
Input: `s = "A man, a plan, a canal: Panama"`  
Output: `true`  
Explanation: `"amanaplanacanalpanama"` is a palindrome.

**Example 2:**  
Input: `s = "race a car"`  
Output: `false`  
Explanation: `"raceacar"` is not a palindrome.

**Example 3:**  
Input: `s = " "`  
Output: `true`  
Explanation: `s` is an empty string `""` after removing non-alphanumeric characters.  
Since an empty string reads the same forward and backward, it is a palindrome.

**Constraints:**

- `1 <= s.length <= 2 \* 105`
- `s` consists only of printable ASCII characters.

## Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const normalizeChar = (char) => {
  const code = char.charCodeAt(0)
  if (code >= 48 && code <= 57) return char
  if (code >= 65 && code <= 90) return char.toLowerCase() // 'A' (65) → 'Z' (90)
  if (code >= 97 && code <= 122) return char // 'a' (97) → 'z' (122)
  return null
}

var isPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const leftChar = normalizeChar(s[left])
    const rightChar = normalizeChar(s[right])
    if (leftChar === null) {
      left++
      continue
    }
    if (rightChar === null) {
      right--
      continue
    }
    if (leftChar !== rightChar) return false
    left++
    right--
  }
  return true
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/valid-palindrome/submissions/1749662553/)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ We scan each character at most once using two pointers, so the runtime grows linearly with the length of the string.

**Space Complexity:** $ O(1) $ <br>
→ Only a few variables (`left`, `right`, and temporary chars) are used, independent of input size. No extra data structures are created.

  <br>
  <br>
