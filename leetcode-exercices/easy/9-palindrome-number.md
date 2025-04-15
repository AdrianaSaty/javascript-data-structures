# 9. Palindrome Number

## Solution

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString();
  let left = 0;
  let right = xString.length - 1;

  while (left <= right) {
    if (xString[left] !== xString[right]) return false;
    left++;
    right--;
  }

  return true;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → where n is the number of digits in x.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The string representation of the number (stringX) is created → uses O(n) space.
