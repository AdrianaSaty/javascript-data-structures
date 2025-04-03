# 3. Longest Substring Without Repeating Characters

## Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const rightLetter = s[right];
    if (map.has(rightLetter)) {
      left = Math.max(map.get(rightLetter) + 1, left);
    }
    let currentLength = right - left + 1;
    maxLength = Math.max(maxLength, currentLength);
    map.set(rightLetter, right);
  }
  return maxLength;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → The loop runs once for each character in the string, where n is the length of the strin
  <br>
- **Space Complexity:** $O(k)$ <br>
  → In the worst case (all unique characters), the map size is O(k) where k is the size of the character set. If you’re dealing with only lowercase letters, k = 26, for general ASCII, k = 128 and for Unicode, potentially more, but it’s still considered O(k).
