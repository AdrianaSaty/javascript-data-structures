# 231. Power of Two

## Solution 1 - Brute force (❌ the worst)

This is a brute-force approach — it checks every power of 2 up to n. It works, but it’s slow for large n. Not recomended.

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  if (n === 1) return true
  for (let i = 1; i <= n; i++) {
    if (Math.pow(2, i) === n) return true
  }
  return false
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/power-of-two/submissions/1718907602/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → the loop runs all the way from 1 up to n without finding a match, so it does n iterations
  <br>
- **Space Complexity:** $O(1)$ <br>
  → only a fixed number of variables (n, i, the loop counters), so O(1).

  <br>
  <br>

## Solution 2 (Logarithmic approach)

This algorithm keeps dividing n by 2. If n becomes 1 after only dividing by 2 → it’s a power of 2. If n is ever not divisible by 2 → it’s not.

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  while (n > 1) {
    if (n % 2 !== 0) return false
    n = n / 2
  }
  return true
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/power-of-two/submissions/1718906767/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(logn) $ <br>
  → each interation divides n by 2 <br>
  → this continues until n becomes 1 <br>
  → the number of times you can divide n by 2 before reaching 1 is approximately log₂(n) <br>
  → Exemple, if n = 1024, the loops runs: <br>
  `1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1` <br>
  That's 10 divisions → $ log₂(1024)$ = 10.

  <br>

- **Space Complexity:** $O(1)$ <br>
  → no extra memory is used regardless of input size.

  <br>
  <br>

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

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/power-of-two/submissions/1717725208/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(1) $ <br>
  → Math.pow(2, 30) is constant-time – evaluated once and always returns 1073741824
  → % (modulo operation) on two 32-bit integers is a constant-time operation
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The only additional variable is maxValue, which holds a single number (2^30)
