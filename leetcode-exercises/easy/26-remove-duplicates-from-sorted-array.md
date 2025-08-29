# 26. Remove Duplicates from Sorted Array

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let leftPointer = 0;

  for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
    if (nums[leftPointer] !== nums[rightPointer]) {
      leftPointer++;
      nums[leftPointer] = nums[rightPointer];
    }
  }

  return leftPointer + 1;
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
