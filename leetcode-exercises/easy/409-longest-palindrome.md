# 409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

**Example 1:**

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

**Example 2:**

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

**Constraints:**

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

## Solution

To form the longest palindrome, we need pairs of characters. Odd counts can only contribute one center character — everything else must be even.

1. Count frequency of each character.
2. Add even counts fully to the result.
3. From odd counts, use the largest even part (i.e., count - 1).
4. If there’s at least one odd count, we can place one extra character in the middle, increasing the total by 1.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let frequence = {}
  let longest = 0

  for (char of s) {
    frequence[char] = (frequence[char] || 0) + 1
  }

  for (const count of Object.values(frequence)) {
    longest += count % 2 === 0 ? count : count - 1
  }

  return longest < s.length ? longest + 1 : longest
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/longest-palindrome/submissions/1766675951/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ We iterate once to count characters and once more to compute the result.  
**Space Complexity:** $O(1)$ <br>
→ Since the input s contains only uppercase (26) + lowercase (26) English letters, the total distinct keys in freq is at most 52. This is a constant upper bound, independent of the input size n.

  <br>
  <br>
