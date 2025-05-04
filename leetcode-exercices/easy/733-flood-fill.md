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
  const imageRow = image.length;
  const imageCol = image[0].length;

  if (initialColor === color) return image;

  const dfs = (row, col) => {
    if (row < 0 || row >= imageRow || col < 0 || col >= imageCol) return;
    if (image[row][col] !== initialColor) return;

    image[row][col] = color;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(sr, sc);

  return image;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Total of pixel in the image. In the worst case the algorithm could visit every pixel once — for example, if the entire image is filled with the same color as the starting pixel.
  <br>
- **Space Complexity:** $O(n)$ <br>
  → The main space cost is due to the call stack from recursive DFS.
