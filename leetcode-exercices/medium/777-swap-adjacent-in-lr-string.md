# 777. Swap Adjacent in LR String

## Solution

```javascript
/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function (start, result) {
  if (start === result) return true;
  let pointerStart = 0;
  let pointerResult = 0;

  while (pointerStart < start.length || pointerResult < result.length) {
    while (start[pointerStart] === "X") {
      pointerStart++;
    }

    while (result[pointerResult] === "X") {
      pointerResult++;
    }
    if (start[pointerStart] !== result[pointerResult]) return false;
    if (start[pointerStart] === "R" && pointerStart > pointerResult)
      return false;
    if (start[pointerStart] === "L" && pointerStart < pointerResult)
      return false;

    pointerStart++;
    pointerResult++;
  }

  return true;
};
```

## 📝 LeetCode Solution

- **Time Complexity:** $ O(n) $ <br>
  → Each pointer only moves forward through the string, skipping X or comparing characters. Since each character is visited at most once → overall time complexity is O(N).
  <br>
- **Space Complexity:** $O(1)$ <br>
  → It is using a few pointers and temporary variables, so O(1) space.
