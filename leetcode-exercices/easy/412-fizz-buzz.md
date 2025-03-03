# 412. Fizz Buzz

## Solution

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let resultArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArray.push("Fizz");
    } else if (i % 5 === 0) {
      resultArray.push("Buzz");
    } else {
      resultArray.push(i.toString());
    }
  }
  return resultArray;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/fizz-buzz/submissions/)

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → The function iterates once from 1 to n, processing each number exactly once.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The function stores n elements in resultArray, making its space complexity O(N).
