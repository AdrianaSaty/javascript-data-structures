# 415. Add Strings

## Solution 1 - charCodeAt and concatenate array

1 - Helper function `convertStringToNumber` turns a single digit character ('0'..'9') into its numeric value

2 - '0' has ASCII/Unicode code 48, so: `'7'.charCodeAt(0) - 48 → 55 - 48 → 7.`

3 - Internally, JS validates that the input is a string, gets the first code unit, and returns its numeric value.

4 - In the main function `addStrings`: Think of addition like on paper  
You don’t add two big numbers all at once — you add them digit by digit from right to left, keeping track of any carry

5 - Start at the last digit of each string using two pointers (`pointer1` for num1, `pointer2` for num2) starting at the end

6 - Process each column (while pointer1, pointer2, or carry exists):  
• Convert the current character to a number (using `charCodeAt` or `'0'` subtraction)  
• If one string is shorter, treat missing digits as 0  
• Compute `sum = digit1 + digit2 + carry`

7 - Split the result into digit + carry:  
• `digit = sum % 10` → the digit for this column  
• `carry = Math.floor(sum / 10)` → what needs to be carried into the next column

8 - Build the result:  
• Prepend the digit to the result string (or push into an array and reverse at the end)  
• Move both pointers left

9 - Stop when nothing is left to add  
• If both strings are done and carry is 0, return the result

<br>

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const convertStringToNumber = (char) => {
  return char.charCodeAt(0) - 48
}
var addStrings = function (num1, num2) {
  let pointer1 = num1.length - 1
  let pointer2 = num2.length - 1
  let carry = 0
  let result = ""
  while (pointer1 >= 0 || pointer2 >= 0 || carry > 0) {
    const digit1 = pointer1 >= 0 ? convertStringToNumber(num1[pointer1]) : 0
    const digit2 = pointer2 >= 0 ? convertStringToNumber(num2[pointer2]) : 0

    const sum = digit1 + digit2 + carry
    const digit = sum % 10
    result = digit + result
    carry = Math.floor(sum / 10)
    pointer1--
    pointer2--
  }

  return result
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/add-strings/submissions/1759948337/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n²) $ <br>
→ Each digit is processed once → O(n) where n = max(len(num1), len(num2))  
→ convertStringToNumber(num1[pointer1]) → O(1)
→ But prepending directly to a string (digit + result), string copying makes it O(n²)  
→ Total time is O(n) + O(n²) = O(n²)  
<br>
**Space Complexity:** $O(n)$ <br>
→ Extra variables (carry, indices) are O(1)  
→ Result string/array is O(n)  
→ Total space complexity is O(n)

  <br>
  <br>

## Solution 2 - refactor

Improvements in the `result` variable:

- Const solutuion 1: Every time you do digit + result, JavaScript creates a new string because strings are immutable. This means the whole result string is copied each time you add a new digit at the front. For example, if result is length k, concatenating takes O(k). Doing this n times (once per digit) → O(1 + 2 + 3 + … + n) = O(n²) time. This is inefficient for large inputs (up to 10⁴ digits per the problem statement) and hidden quadratic cost when prepending to a string repeatedly.
- Pros solutuion 2: Instead of prepending, you just append to the array (O(1) amortized). After the loop, you reverse once (O(n)) and join (O(n)). Total complexity: O(n) time, O(n) space.

Improvements in the `convertStringToNumber` function:

- Const solutuion 1:  
  Calls .charCodeAt(0) which:
  1.  Checks that char is a valid string,
  2.  Looks up its code point,
  3.  Subtracts 48.
      This is slightly more verbose and with method-call overhead. Complexity is O(1) per call, but with slightly more work (function call + bounds check + property access)
- Pros solutuion 2:
  Subtract '0':
  1. In JavaScript, subtracting a string from another string triggers type coercion
  2. '7' - '0' → both coerced to numbers → 7 - 0 → 7.
  3. Super concise, very idiomatic in competitive programming / LeetCode.
  4. Slightly faster in practice, because it avoids calling .charCodeAt(0) at all.

<br>

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const convertStringToNumber = (char) => {
  return char - "0"
}
var addStrings = function (num1, num2) {
  let pointer1 = num1.length - 1
  let pointer2 = num2.length - 1
  let carry = 0
  let result = []
  while (pointer1 >= 0 || pointer2 >= 0 || carry > 0) {
    const digit1 = pointer1 >= 0 ? convertStringToNumber(num1[pointer1]) : 0
    const digit2 = pointer2 >= 0 ? convertStringToNumber(num2[pointer2]) : 0

    const sum = digit1 + digit2 + carry
    result.push(sum % 10)
    carry = Math.floor(sum / 10)
    pointer1--
    pointer2--
  }

  return result.reverse().join("")
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/add-strings/submissions/1759955758/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ Each digit is processed once → O(n) where n = max(len(num1), len(num2))  
→ Inside de loop:  
• convertStringToNumber(num1[pointer1]) → O(1) (just 'char - "0"' with type coercion).  
• result.push(...) → O(1) amortized.  
→ After the loop:  
• result.reverse() → O(n).  
• result.join("") → O(n).  
→ Total time is O(n) + O(n) + O(n) = O(n) = O(n)  
<br>
**Space Complexity:** $O(n)$ <br>
→ Extra variables (carry, indices) are O(1)  
→ Result string/array is O(n)  
→ Total space complexity is O(n)

  <br>
  <br>
