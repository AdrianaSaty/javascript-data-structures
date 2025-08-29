# 1893. Check if All the Integers in a Range Are Covered

## Solution

```javascript
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    let isRangeInclusive = false;
    for (let j = 0; j < ranges.length && !isRangeInclusive; j++) {
      if (i >= ranges[j][0] && i <= ranges[j][1]) {
        isRangeInclusive = true;
      }
    }
    if (!isRangeInclusive) return false;
  }
  return true;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode]()

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n\*m) $ <br>
  → Outer loop runs from left to right → let’s say that’s n = right - left + 1
  → Inner loop iterates through all ranges → m = ranges.length
  → In the worst case, the inner loop runs m times for each of the n values
  → n = number of integers between left and right
  → m = number of intervals in ranges

  <br>

- **Space Complexity:** $O(1)$ <br>
  → No extra data structures are used.
