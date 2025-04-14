# 7. Reverse Integer

## Solution

```javascript
function reverse(x) {
  const maxValue = Math.pow(2, 31) - 1;
  const minValue = -Math.pow(2, 31);

  let isNegative = x < 0;
  let str = Math.abs(x).toString();
  let chars = str.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  let reversedStr = chars.join("");
  let reversedInt = parseInt(reversedStr, 10);

  if (isNegative) reversedInt *= -1;

  if (reversedInt > maxValue || reversedInt < minValue) {
    return 0;
  }

  return reversedInt;
}
```

## 📝 LeetCode Solution

🔗 [View on LeetCode]()

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Where N is the number of digits in x. Since x is a 32-bit signed integer, the max digit count is 10, so this is effectively constant time, i.e. O(1) in practice.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Where a string copy of the number is O(N) and an array of characters is also O(N). But again, since N ≤ 10 for 32-bit integers, it’s small and considered O(1) in practical terms.
