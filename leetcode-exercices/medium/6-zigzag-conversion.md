# 6. Zigzag Conversion

## Solution 1 - with a matrix

```javascript
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const cols = s.length; // Safe   for max possible columns
  const matrix = new Array(numRows)
    .fill(null)
    .map(() => new Array(cols).fill(null));

  let currentRow = 0;
  let currentCol = 0;
  let isDiagonal = false;

  for (let i = 0; i < s.length; i++) {
    matrix[currentRow][currentCol] = s[i];

    if (!isDiagonal) {
      if (currentRow === numRows - 1) {
        isDiagonal = true;
        currentRow--;
        currentCol++;
      } else {
        currentRow++;
      }
    } else {
      if (currentRow === 0) {
        isDiagonal = false;
        currentRow++;
      } else {
        currentRow--;
        currentCol++;
      }
    }
  }

  let result = "";
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] !== null) {
        result += matrix[row][col];
      }
    }
  }

  return result;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Matrix creation is O(numRows × cols), Character placement in matrix is $O(n)$
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The matrix uses $O(numRows*n)$ space, simplified to $O(n)$. The result string also takes $O(n)$ space.

<br>

## Solution 2 - better runtime and memory usage

“To be honest, I don’t think I could have come up with this solution by myself, so I’m putting it here with some explanations. xD”

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const zigzagRows = new Array(numRows).fill("");
  let currentRow = 0;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    zigzagRows[currentRow] += s[i];

    // Flip direction when hitting top or bottom
    if (currentRow === 0) {
      direction = 1;
    } else if (currentRow === numRows - 1) {
      direction = -1;
    }

    currentRow += direction;
  }

  return zigzagRows.join("");
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Looping through the input string s once, character by character then $O(n)$
  → Adding a character to a string (like zigzagRows[currentRow] += s[i]) is technically $O(1)$ per operation in most JavaScript engines, even though strings are immutable (the engines optimize this under the hood).
  → Final join (toString().replaceAll(",", "")) also processes the characters once → $O(n)$
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Storing each character from s into one of the rows in zigzagRows, which is an array of numRows strings. So at the end, you still store all n characters (just spread across rows).
  → The array zigzagRows itself is of size numRows, which is negligible compared to n.
