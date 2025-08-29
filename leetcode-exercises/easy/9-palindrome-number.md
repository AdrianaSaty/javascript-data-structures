# 9. Palindrome Number

#easy #math #two-pointers #palindrome

Given an integer x, return true if x is a palindrome, and false otherwise.

**Example 1:**

Input: x = 121  
Output: true  
Explanation: 121 reads as 121 from left to right and from right to left.

**Example 2:**

Input: x = -121  
Output: false  
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Example 3:**  
Input: x = 10  
Output: false  
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

**Constraints:**

- -231 <= x <= 231 - 1
- Follow up: Could you solve it without converting the integer to a string?

## Solution 1- using string conversion

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString()
  let left = 0
  let right = xString.length - 1

  while (left <= right) {
    if (xString[left] !== xString[right]) return false
    left++
    right--
  }

  return true
}
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → where n is the number of digits in x.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The string representation of the number (stringX) is created → uses O(n) space.
  <br>
  <br>

## Solution 2 - Math Approach

1. Filter out invalid cases: if the number is negative or ends with 0 (but isn’t 0 itself), it cannot be a palindrome.
2. Reverse half of the number: take the last digit (`x % 10`), append it to `reversed`, and remove it from `x` (`x = Math.floor(x / 10)`). Keep doing this until `reversed` ≥ `x`.
3. Compare halves:
   - If the number has even length → check if `x === reversed`.
   - If the number has odd length → ignore the middle digit and check `x === Math.floor(reversed / 10)`.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let reversed = 0
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return x === reversed || x === Math.floor(reversed / 10)
}
```

### 📈 Complexity Analysis

- **Time Complexity:** $O(logn)$ <br>
  → because we process each digit once.
  <br>
- **Space Complexity:** $O(1)$ <br>
  → only a few variables used.
