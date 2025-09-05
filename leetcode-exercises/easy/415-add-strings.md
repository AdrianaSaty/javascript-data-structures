# 415. Add Strings

## Solution 1 - charCodeAt and concatenate array

1 - Helper function `convertStringToNumber` turns a single digit character ('0'..'9') into its numeric value

2 - '0' has ASCII/Unicode code 48, so: `'7'.charCodeAt(0) - 48 → 55 - 48 → 7.`

3 - In the main function `addStrings`: Think of addition like on paper  
You don’t add two big numbers all at once — you add them digit by digit from right to left, keeping track of any carry

4 - Start at the last digit of each string using two pointers (`pointer1` for num1, `pointer2` for num2) starting at the end

5 - Process each column (while pointer1, pointer2, or carry exists):  
• Convert the current character to a number (using `charCodeAt` or `'0'` subtraction)  
• If one string is shorter, treat missing digits as 0  
• Compute `sum = digit1 + digit2 + carry`

6 - Split the result into digit + carry:  
• `digit = sum % 10` → the digit for this column  
• `carry = Math.floor(sum / 10)` → what needs to be carried into the next column

7 - Build the result:  
• Prepend the digit to the result string (or push into an array and reverse at the end)  
• Move both pointers left

8 - Stop when nothing is left to add  
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
    carry = Math.floor(sum / 10)
    result = digit + result
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
→ But prepending directly to a string (digit + result), string copying makes it O(n²)  
→ Total time is O(n) + O(n²) = O(n²)  
<br>
**Space Complexity:** $O(n)$ <br>
→ Extra variables (carry, indices) are O(1)  
→ Result string/array is O(n)  
→ Total space complexity is O(n)

  <br>
  <br>
