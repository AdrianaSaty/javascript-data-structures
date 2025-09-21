# 118. Pascal's Triangle

#easy #array #math #dynamic-programming

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

![pascal's tree](../assets/118.gif)

**Example 1:**

Input: `numRows = 5`  
Output: `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]`

**Example 2:**

Input: `numRows = 1`  
Output: `[[1]]`

**Constraints:**

`1 <= numRows <= 30`

## Solution

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = []
  triangle.push([1])

  for (let i = 1; i < numRows; i++) {
    const row = [1]
    if (i > 0) {
      const prevRow = triangle[i - 1]
      for (let j = 1; j < prevRow.length; j++) {
        row.push(prevRow[j - 1] + prevRow[j])
      }
      row.push(1)
    }
    triangle.push(row)
  }

  return triangle
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/pascals-triangle/submissions/1777654326/)

### 📈 Complexity Analysis

**Time Complexity:** $O(n^2)$ <br>
→ Outer loop `for (let i = 1; i < numRows; i++)` runs `numRows − 1` times, so $O(n)$ iterations  
→ Inner loop `for (let j = 1; j < prevRow.length; j++)`. On row i, prevRow.length = i. So inner loop runs $(i-1)$ times  
→ Total work across all rows: $O(n^2)$

**Space Complexity:** $O(n^2)$ <br>
→ You store the entire triangle in memory  
→ That means the total number of elements stored is also $O(n^2)$

  <br>
  <br>
