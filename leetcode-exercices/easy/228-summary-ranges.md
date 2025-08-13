# 228. Summary Ranges

#two-pointers

## Solution 1 (Single loop)

The function summaryRanges(nums) summarizes a sorted array of unique integers into a list of string ranges.

How it works:<br>

1. It tracks the start of each range using a startRange pointer.<br>
2. It loops through nums: If the current number is not consecutive to the previous, or it’s the end of the array, it ends the current range and adds a formatted string to the result.<br>
3. The helper formatRange(start, end) returns:<br>
   • "x" for a single number.<br>
   • "x->y" for a range of consecutive numbers.<br>

```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const formatRange = (start, end) =>
  start === end ? `${start}` : `${start}->${end}`

var summaryRanges = function (nums) {
  const n = nums.length
  const result = []
  let startRange = 0

  for (let i = 1; i <= n; i++) {
    if (i === n || nums[i] !== nums[i - 1] + 1) {
      if (i > startRange) {
        const endRange = i - 1
        result.push(formatRange(nums[startRange], nums[endRange]))
        startRange = i
      }
    }
  }

  return result
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/summary-ranges/submissions/1734276065/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Loop through the intire array once
  <br>
- **Space Complexity:** $O(n)$ <br>
  → output array `rangeArray` could store up to n strings if there is no consecutive numbers <br>
  → currentRangeArray is reused and stays small (at most 2 elements), so it’s negligible <br>

  <br>
  <br>

## Solution 2 (Two pointers) TODO

```javascript

```

### 📝 LeetCode Solution

🔗 [View on LeetCode]()

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  →
  <br>
- **Space Complexity:** $O(n)$ <br>
  →

  <br>
  <br>
