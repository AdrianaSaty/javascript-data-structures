# 777. Swap Adjacent in LR String

#medium #google #past-interview #two-pointers #string

In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string result, return True if and only if there exists a sequence of moves to transform start to result.

Example 1:

```
Input: start = "RXXLRXRXL", result = "XRLXXRRLX"
Output: true
Explanation: We can transform start to result following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
```

Example 2:

```
Input: start = "X", result = "L"
Output: false
```

Constraints:

- 1 <= start.length <= 104
- start.length == result.length
- Both start and result will only consist of characters in 'L', 'R', and 'X'.

## Solution

1. Skip 'X' in both start and result strings until a non-'X' character is found.
2. Compare the characters at the current positions:
   - If they differ, return false (order of 'L' and 'R' must match).
3. Apply movement rules based on character type:
   - 'R' cannot move left → resultIndex >= startIndex.
   - 'L' cannot move right → resultIndex <= startIndex.
4. Continue scanning until both pointers reach the end.
5. The algorithm ensures the sequence and relative positions of 'L' and 'R' can be achieved with valid swaps.

```javascript
/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function (start, result) {
  if (start === result) return true
  const n = start.length
  let startPointer = 0
  let resultPointer = 0

  while (startPointer < n || resultPointer < n) {
    while (start[startPointer] === "X") startPointer++
    while (result[resultPointer] === "X") resultPointer++

    if (start[startPointer] !== result[resultPointer]) return false
    if (start[startPointer] == "R" && startPointer > resultPointer) return false
    if (start[startPointer] == "L" && startPointer < resultPointer) return false
    startPointer++
    resultPointer++
  }
  return true
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/swap-adjacent-in-lr-string/submissions/1736130253/)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ Each pointer scans through the string once, skipping 'X' characters and comparing corresponding non-'X' characters.  
→ All operations inside the loop are constant time, so total time is proportional to the string length n.  
**Space Complexity:** $O(1)$ <br>
→ The algorithm uses only a fixed number of variables (i, j, c), regardless of input size.  
→ No extra data structures are created, so memory usage stays constant.  
<br>
<br>
