# 13. Roman to Integer

## Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanChars = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let finalNumber = 0;
  for (let i = 0; i < s.length; i++) {
    let currentNumber = romanChars[s[i]];
    let nextNumber = romanChars[s[i + 1]];

    if (currentNumber < nextNumber) {
      finalNumber -= currentNumber;
    } else {
      finalNumber += currentNumber;
    }
  }
  return finalNumber;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → O(n), where n is the length of the input string s
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The romanChars object contains a fixed set of Roman numeral mappings (I, V, X, L, C, D, M), which does not grow with the input.
  → No additional space is used that depends on the input size — only scalar variables are allocated.
