# 69. Sqrt(x)

## Solution

    1.	Imagine a number line from 0 to x. Somewhere on that line is the square root of x.
    2.	Instead of checking every number one by one (which would be slow), the algorithm uses binary search — a fast way to narrow down the answer.
    3.	At each step:
    •	It checks the middle number between the current low and high guesses.
    •	If the square of that number is too big, it eliminates the higher half.
    •	If it’s too small, it eliminates the lower half.
    •	If it’s exactly right, it returns that number.
    4.	This process repeats until the search space is so small that the algorithm can safely return the largest number whose square doesn’t go over x.

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}
```

## 📝 LeetCode Solution

🔗 [View on LeetCode]()

### 📈 Complexity Analysis

- **Time Complexity:** $ O(logn) $ <br>
  → At each interation, the searc space is divided in half → O(logn)
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The algorithm uses only a constant amount of additional space, no additional data structures are used.
