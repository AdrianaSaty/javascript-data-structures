# 448. Find All Numbers Disappeared in an Array

#easy #array #hashmap #counting

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

**Example 1:**

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

**Example 2:**

Input: nums = [1,1]
Output: [2]

**Constraints:**

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

## Solution - counting

1. It creates a Set of all elements in nums. A Set automatically removes duplicates, so it represents exactly which numbers are present.
2. It then loops from 1 to n, and for each number, checks if it’s in the set.
3. If it’s not, that means this number is missing from the array, so it gets added to result.
4. Finally, result is returned.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  let dict = {}
  let result = []

  for (let i = 0; i <= n - 1; i++) {
    const currentNumber = nums[i]
    if (!dict[currentNumber]) {
      dict[currentNumber] = true
    }
  }

  for (let j = 1; j <= n; j++) {
    if (!dict[j]) {
      result.push(j)
    }
  }

  return result
}
```

## Solution - counting - refactor

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  if (n === 0) return []

  const seen = new Set(nums)
  const result = []

  for (let value = 1; value <= n; value++) {
    if (!seen.has(value)) result.push(value)
  }

  return result
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/1770048070/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ First loop: goes through nums once → O(n)
→ Second loop: goes from 1 to n → O(n)
→ Together → O(n) + O(n) = O(n)

**Space Complexity:** $O(n)$ <br>
→ It builds a dict object to store up to n keys → O(n)

  <br>
  <br>
