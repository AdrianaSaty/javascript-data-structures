# 80. Remove Duplicates from Sorted Array II

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let leftPointer = 2;

  for (let rightPointer = 2; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== nums[leftPointer - 2]) {
      nums[leftPointer] = nums[rightPointer];
      leftPointer++;
    }
  }

  return leftPointer;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/6382057/best-easy-solution-on-by-infoadrianasaty-8ylk/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → We iterate through `nums` only once
  <br>
- **Space Complexity:** $O(1)$ <br>
  → We modify `nums` in-place without using extra space
