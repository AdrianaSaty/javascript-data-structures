# 79. Word Search

## Solution

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const boardRow = board.length;
  const boardCol = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (row, col, wordIndex) => {
    if (row < 0 || row >= boardRow || col < 0 || col >= boardCol) return false;
    if (board[row][col] !== word[wordIndex]) return false;
    if (wordIndex === word.length - 1) return true;

    const temp = board[row][col];
    board[row][col] = "#";

    for (const [x, y] of directions) {
      const nextRow = row + x;
      const nextCol = col + y;
      if (dfs(nextRow, nextCol, wordIndex + 1)) return true;
    }
    board[row][col] = temp;
    return false;
  };

  for (let i = 0; i < boardRow; i++) {
    for (let j = 0; j < boardCol; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }

  return false;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $O(m \cdot n \cdot 4^L)$ <br>
  → The outer loops go through every cell of the board, which is $O(m \cdot n)$, where m is the number of rows and n is the number of columns.
  <br>
  → For each DFS path, at each step you have at most 4 choices (up, down, left, right), so it takes $O(4^L)$, where L is the length of the word. <br>
  → In practice, due to marking visited cells (#), the number of paths will often be lower, but in the worst case, we assume $O(4^L)$.

- **Space Complexity:** $O(L)$ <br>
  → At most L recursive calls will be on the call stack at any time (since the word length is L). Therefore, space complexity is $O(L)$.
