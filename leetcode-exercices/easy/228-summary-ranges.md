# 228. Summary Ranges

## Solution 1 (Single loop)

The function summaryRanges(nums) summarizes a sorted array of unique integers into a list of string ranges.

How it works: 1. It uses a temporary array currentRangeArray to track a range. 2. It loops through nums:<br>
• Starts a new range if needed.<br>
• Continues the range if the next number is consecutive.<br>
• Ends and formats the range if the next number is not consecutive (or at the end of the array). 3. The transformRangeArray helper formats:
• A single number as "x".<br>
• A range as "x->y".<br>

```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const transformRangeArray = (arr) => {
  if (arr.length === 1) return arr.toString()
  return `${arr[0]}->${arr[arr.length - 1]}`
}
var summaryRanges = function (nums) {
  let rangeArray = []
  let currentRangeArray = []

  for (let i = 0; i < nums.length; i++) {
    if (currentRangeArray.length === 0) {
      currentRangeArray.push(nums[i])
    }
    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      if (nums[i] !== currentRangeArray[currentRangeArray.length - 1]) {
        currentRangeArray.push(nums[i])
      }

      rangeArray.push(transformRangeArray(currentRangeArray))
      currentRangeArray = []
    }
  }
  return rangeArray
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/summary-ranges/submissions/1718939552)

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
