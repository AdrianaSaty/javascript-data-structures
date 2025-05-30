# 2337. Move Pieces to Obtain a String

## Solution

```javascript
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let pointerStart = 0;
  let pointerTarget = 0;

  while (pointerStart < start.length || pointerTarget < target.length) {
    while (start[pointerStart] === "_") {
      pointerStart++;
    }
    while (target[pointerTarget] === "_") {
      pointerTarget++;
    }
    if (start[pointerStart] != target[pointerTarget]) return false;
    if (start[pointerStart] === "L" && pointerStart < pointerTarget)
      return false;
    if (start[pointerStart] === "R" && pointerStart > pointerTarget)
      return false;
    pointerStart++;
    pointerTarget++;
  }

  return true;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/6391502/best-easy-solution-on-beginner-by-infoad-55pa/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → We iterate through both strings only once
  <br>
- **Space Complexity:** $O(1)$ <br>
  → We use only two pointers and modify nothing in-place
