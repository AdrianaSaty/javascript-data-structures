# 169. Majority Element

## Solution 1

Using hashmap.

- **Time Complexity:** $ O(n) $
- **Space Complexity:** $ O(n) $ - this can be better!!

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const appearance = Math.round(nums.length / 2);
  let dict = {};

  if (appearance < 2) return nums[0];
  for (num of nums) {
    if (dict[num]) {
      dict[num]++;
      if (dict[num] == appearance) return num;
    } else {
      dict[num] = 1;
    }
  }
};
```

## 🔥 Solution 2

Using Boyer-Moore Voting Algorithm.

- **Time Complexity:** $ O(n) $
- **Space Complexity:** $ O(1) $ - this better!!

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majorityElement;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majorityElement = num;
    }
    if (majorityElement == num) {
      count++;
    } else {
      count--;
    }
  }

  return majorityElement;
};
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/majority-element/solutions/6395742/best-big-o-solution-on-o1-by-infoadriana-s3gg/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → We iterate through `logs` only once and another loop with fixed size of 101.
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The populationChange array has a fixed size of 101
