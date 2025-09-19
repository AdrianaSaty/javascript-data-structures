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

## Solution 1 - counting

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

### Refactored version:

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

## Solution 2 - in-place marking

1. For each number in nums, map it to an index (val - 1).
2. At that index, flip the value to negative (if it’s positive). This marks that the number val exists in the array.
3. After processing all numbers, any index that still holds a positive value means its corresponding number (index + 1) never appeared in the array.
4. Collect those numbers into result and return.

**Example Walkthrough**  
imput: `nums = [4, 3, 2, 7, 8, 2, 3, 1]`

1. Marking phase: We go through the array and negate the values at the corresponding indices:  
   Index: 0 1 2 3 4 5 6 7  
   Value: [4, 3, 2, 7, 8, 2, 3, 1]

See 4  
mark index 3
[4, 3, 2, -7, 8, 2, 3, 1]

See 3
mark index 2  
[4, 3, -2, -7, 8, 2, 3, 1]

See 2
mark index 1  
[4, -3, -2, -7, 8, 2, 3, 1]

See -7
index 6 already marked

See 8
mark index 7  
[4, -3, -2, -7, 8, 2, -3, 1]

See 2 again → index 1 already marked

See -3 again → index 2 already marked

→ See 1 → mark index 0
[-4, -3, -2, -7, 8, 2, -3, -1]

2. Collecting phase: now, we check which indices stayed positive:  
   Indices 4 and 5 are positive → missing numbers are 5 and 6.

3. Result: [5, 6]

  <br>
  <br>

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  let result = []

  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i]) - 1
    if (nums[val] > 0) {
      nums[val] = -nums[val]
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }

  return result
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/1775573902/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ First loop: goes through nums once to mark seen numbers → O(n)
→ Second loop: goes through nums again to collect missing ones → O(n)
→ Together → O(n) + O(n) = O(n)

**Space Complexity:** $O(1)$ <br>
→ It does not use extra space (ignoring the result array).
→ The marking is done in place by negating values in nums.

## 🔍 Runtime vs Memory Observation

When submitted on LeetCode:
• Counting solution (dict/Set): ~25 ms, 71 MB
• In-place solution: ~6 ms, 71 MB

At first, this looks surprising because the in-place version mainly optimizes space.
But here’s why runtime also improves:
• The dictionary/Set approach involves hashing operations (insert + lookup) which are O(1) on average, but with larger constant factors.
• The in-place version only does simple array indexing and arithmetic, which is much faster and more cache-friendly.
• LeetCode’s memory measurements are coarse-grained (they always include the input array, result array, and environment overhead). That’s why both report ~71 MB even though the dictionary version theoretically uses O(n) extra space.

👉 In short:
• Theoretical improvement: space goes from O(n) → O(1).
• Practical effect: runtime also improves significantly due to lower constant factors and better cache locality.
