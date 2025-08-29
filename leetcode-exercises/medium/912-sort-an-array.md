# 912. Sort an Array

## Solution - Quick Sort

I used the Quick Sort algorithm, which sorts the array in-place and achieves average-case time complexity of O(n log n) with constant space overhead (excluding the recursion stack).

- In-place sorting: No extra memory is used apart from the recursion stack.<br/>
- Randomized pivot: A random index is selected to reduce the risk of poor partitioning.<br/>
- Two-pointer partitioning: The array is partitioned using a while loop with two pointers (i and j) moving toward each other. <br/>
- Not stable: Like most Quick Sorts, this version is not stable (equal elements may change order).However, for this problem, stability is not required and does not affect the correctness of the solution. <br/>
  <br/>
  How it works? <br/>

1. Select a random pivot from the current subarray. <br/>
2. Partition the array so elements less than the pivot go to the left, and greater to the right. <br/>
3. Recursively apply Quick Sort on both halves.<br/>

```javascript
function sortArray(nums) {
  function quickSort(left, right) {
    if (left >= right) return

    let i = left
    let j = right

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
    const pivot = nums[pivotIndex]

    while (i < j) {
      while (nums[i] < pivot) i++
      while (nums[j] > pivot) j--

      if (i <= j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
      }
    }

    quickSort(left, j)
    quickSort(i, right)
  }

  quickSort(0, nums.length - 1)
  return nums
}
```

## 🧠 Solution – Merge Sort

The algorithm uses the classic **Merge Sort** technique

1. The `mergeSort()` function **recursively splits** the array into smaller and smaller halves, until each subarray contains only one element — which is considered sorted by itself

2. Once divided, we begin to **merge the subarrays back together in sorted order**

To do that, we use the `merge(left, right)` function:

- It compares the first number in each sorted half
- It keeps adding the **smallest** number to a new result array
- This process continues until all elements from both halves are added

In the end, all the pieces are reassembled into **one fully sorted array**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
  }

  const merge = (left, right) => {
    const result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }

    while (i < left.length) {
      result.push(left[i])
      i++
    }

    while (j < right.length) {
      result.push(right[j])
      j++
    }

    return result
  }

  return mergeSort(nums)
}
```

## 📝 LeetCode Solution

🔗 [View on LeetCode - quick sort](https://leetcode.com/problems/sort-an-array/submissions/1689568586/)
🔗 [View on LeetCode - merge sort](https://leetcode.com/problems/sort-an-array/submissions/1689572219/)

### 📈 Complexity Analysis

#### Quick sort

- **Time Complexity:** $ O(nlogn) $ <br>
  → Best/average case: O(nlogn), pivor splits array roughly in half. log n levels of recursion × n work per level
  → Worst case: O(n²), Happens if pivot creates very unbalanced splits (e.g. sorted array with first/last pivot). Can be avoided by using random pivot
  <br>
- **Space Complexity:** $O(logn)$ <br>
  → No new arrays are created (in-place swaps), only recursive call stack uses memory. At most log n depth if partitions are balanced

#### Merge sort

- **Time Complexity:** $ O(nlogn) $ <br>
  → Splitting: You divide the array in half at every level → log n levels.
  → Merging: You merge all elements at each level → O(n) work per level.
  → Total = O(n log n)
  <br>
- **Space Complexity:** $O(n)$ <br>
  → Each slice() creates a new array.
  → The merge() function builds a new result array.
  → Overall extra memory usage grows with the number of elements: O(n)
  → No new arrays are created (in-place swaps), only recursive call stack uses memory. At most log n depth if partitions are balanced

### Final answer:

**Quick Sort is the better choice** ✅

Since the problem requires:

- `O(n log n)` time complexity
- Minimal space usage (smallest possible)
- The problem doesn’t require stability, so we can ignore that advantage of merge sort

Just use a randomized pivot to avoid the worst-case scenario.

| Feature                       | Quick Sort                                                      | Merge Sort                                      |
| ----------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| **Time Complexity (avg)**     | ✅ `O(n log n)`                                                 | ✅ `O(n log n)`                                 |
| **Time Complexity (worst)**   | ❌ `O(n²)` (unbalanced pivot)<br>✅ Can avoid with random pivot | ✅ `O(n log n)` always                          |
| **Space Complexity**          | ✅ `O(log n)` (in-place recursion stack only)                   | ❌ `O(n)` (creates new arrays when splitting)   |
| **In-place?**                 | ✅ Yes                                                          | ❌ No (needs extra arrays)                      |
| **Stable Sort?**              | ❌ No                                                           | ✅ Yes                                          |
| **Implementation Simplicity** | ✅ Short and intuitive                                          | ❌ More verbose (especially index-based merge)  |
| **Best For**                  | ✅ Low-memory scenarios, general-purpose sorting                | ✅ Predictable performance, stable requirements |
