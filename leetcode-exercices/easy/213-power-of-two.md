# 231. Power of Two

## Solution 1 (the best 🏆 )

- Any positive integer n that is a power of two will divide 2^30 without remainder (because powers of two are closed under division when smaller).
- So, if n divides 2^30, it must be one of:
  `1, 2, 4, 8, ..., 2^30`

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  const maxValue = Math.pow(2, 30) // max value that a power of two can have
  if (maxValue % n === 0) return true
  return false
}
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/power-of-two/submissions/1717725208/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(1) $ <br>
  → Math.pow(2, 30) is constant-time – evaluated once and always returns 1073741824
  → % (modulo operation) on two 32-bit integers is a constant-time operation
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The only additional variable is maxValue, which holds a single number (2^30)
