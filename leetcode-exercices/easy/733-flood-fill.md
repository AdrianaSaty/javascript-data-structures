# 733. Flood Fill

## Solution

```javascript
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const initialColor = image[sr][sc];
  if (initialColor === color) return image;

  const imageRowLength = image.length;
  const imageColLength = image[0].length;

  const directions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const dfs = (row, col) => {
    if (
      row >= imageRowLength ||
      row < 0 ||
      col >= imageColLength ||
      col < 0 ||
      image[row][col] !== initialColor
    )
      return;

    image[row][col] = color;

    for (const [dx, dy] of directions) {
      const nextRow = row + dx;
      const newCol = col + dy;
      dfs(nextRow, newCol);
    }
  };

  dfs(sr, sc, color);

  return image;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Total of pixel in the image. In the worst case the algorithm could visit every pixel once — for example, if the entire image is filled with the same color as the starting pixel.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The main space cost is due to the call stack from recursive DFS.
