# 739. Daily Temperatures

## Solution

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let daysArray = new Array(temperatures.length).fill(0);
  let stack = [[temperatures[0], 0]];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const [lastTemp, lastIndex] = stack.pop();
      daysArray[lastIndex] = i - lastIndex;
    }
    stack.push([temperatures[i], i]);
  }

  return daysArray;
};
```

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Each temperature is visited at most twice, ensuring efficient processing.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → We store the daysArray and the stack, both of which depend on the input size.
