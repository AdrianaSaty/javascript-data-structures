# 242. Valid Anagram

## Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let dict = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    dict[charS] = (dict[charS] || 0) + 1;

    dict[charT] = (dict[charT] || 0) - 1;
    if (dict[charS] === 0) delete dict[charS];
    if (dict[charT] === 0) delete dict[charT];
  }
  return Object.keys(dict).length === 0;
};
```

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → The loop runs n times, where n = s.length.
  <br>
- **Space Complexity:** $O(1)$ <br>
  → At most 26 entries in dict, which is constant
