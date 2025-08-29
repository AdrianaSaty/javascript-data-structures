# 424. Longest Repeating Character Replacement

## Solution (Sliding Window)

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let freq = new Array(26).fill(0);
  let start = 0;
  let maxFrequencyLetter = 0;
  let maxWindow = 0;

  for (let end = 0; end < s.length; end++) {
    let charIndex = s.charCodeAt(end) - "A".charCodeAt(0);
    freq[charIndex]++;

    maxFrequencyLetter = Math.max(maxFrequencyLetter, freq[charIndex]);

    let windowLength = end - start + 1;

    if (windowLength - maxFrequencyLetter > k) {
      let startCharIndex = s.charCodeAt(start) - "A".charCodeAt(0);
      freq[startCharIndex]--;
      start++;
    }

    maxWindow = Math.max(maxWindow, end - start + 1);
  }

  return maxWindow;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/submissions/1557711956/)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Each character is visited at most twice (end moves forward, start moves forward). This results in O(N) + O(N) = O(N).
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The frequency array freq stores only 26 characters (A-Z). This is constant space → O(26) → O(1).
