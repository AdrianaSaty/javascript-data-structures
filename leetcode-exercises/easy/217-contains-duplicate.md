# 217. Contains Duplicate

## Solution - Hashmap

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dict[num]) {
      return true;
    } else {
      dict[num] = 1;
    }
  }
  return false;
};
```

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → The function loops through nums once,
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The dictionary dict stores up to n unique numbers in the worst case (if all elements are distinct).
