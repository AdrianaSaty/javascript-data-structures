# 11. Container With Most Water

## Solution

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAmount = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const containerLength = right - left;
    const currentArea = minHeight * containerLength;
    maxAmount = Math.max(maxAmount, currentArea);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxAmount;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → At the worst scenario the loop runs once for each element in the array, moving either the left or right pointer inward on each iteration. So it's $ O(n) $, when n is the size of the array.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The function uses a constant amount of extra space: a few variables (left, right, maxAmount, etc.), regardless of input size. So it's O(n).
