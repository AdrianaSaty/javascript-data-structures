# 1091. Shortest Path in Binary Matrix

## Solution

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  let queue = [[0, 0, 1]]; // [row, col, path]
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  grid[0][0] = 1;

  while (queue.length) {
    const [row, col, shortestLength] = queue.shift();

    if (row === n - 1 && col === n - 1) {
      return shortestLength;
    }

    for (const [directionRow, directionCol] of directions) {
      const newRow = row + directionRow;
      const newCol = col + directionCol;

      if (newRow >= 0 && newCol >= 0 && grid[newRow][newCol] === 0) {
        queue.push([newRow, newCol, shortestLength + 1]);
        grid[newRow][newCol] = 1;
      }
    }
  }

  return -1;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n²) $ <br>
  → The grid is n x n, so there are n² cells. And each cell is visited at most once. For each visited cell, you check up to 8 directions, which is constant O(1) work per cell. So total time = O(n² \* 1) → O(n²)
  <br>
- **Space Complexity:** $O(n²)$ <br>
  → Queue can hold up to O(n²) elements in the worst case (e.g., empty grid). Grid is modified in place to mark visited, so no extra space used for a visited[][]. So total space = O(n²) due to the queue.
