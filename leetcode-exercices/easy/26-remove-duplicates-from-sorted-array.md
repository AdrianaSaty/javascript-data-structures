# Remove Duplicates from Sorted Array

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/6380588/best-easy-solution-o-n-beginner/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → We iterate through `nums` only once
  <br>
- **Space Complexity:** $O(1)$ <br>
  → We modify `nums` in-place without using extra space
