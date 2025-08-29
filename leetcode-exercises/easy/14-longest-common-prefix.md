# 14. Longest Common Prefix

## Solution 1

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const sorted = strs.sort();
  const first = sorted[0];
  const last = sorted[strs.length - 1];
  let response = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] != last[i]) break;
    response = response + first[i];
  }

  return response;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n logn x m) $ <br>
  → Sorting an array of n strings takes O(nlogn), where n is the number os strings
  → Since strings themselves have length, sorting involves comparing characters, each comparison can take up to O(m), where m is the average length of the strings
  → Technically, sorting here is O(nlogn x m) in the worst case
  <br>
- **Space Complexity:** $O(1)$ <br>
  → sort() is in-place javascript, no new array created

## Solution 2

TODO: try to resolve with O(n × m) time complexity and O(1) space complexity
