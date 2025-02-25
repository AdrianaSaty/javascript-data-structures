# 1700. Number of Students Unable to Eat Lunch

## Solution - Counters (Best solution)

```javascript
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count0 = students.filter((s) => s === 0).length;
  let count1 = students.length - count0;

  for (let sandwich of sandwiches) {
    if (sandwich === 0 && count0 > 0) count0--;
    else if (sandwich === 1 && count1 > 0) count1--;
    else break;
  }

  return count0 + count1;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Processes each element once
  <br>
- **Space Complexity:** $O(1)$ <br>
  → this does not use extra data structures, making it constant space. It only uses two integer counters (count0 and count1) and the input arrays (students and sandwiches) are not modified, just iterated.

## Solution - Queue

```javascript
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;

  while (count < students.length && students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      const swapStudent = students.shift();
      students.push(swapStudent);
      count++;
    }
  }

  return students.length;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n²) $ <br>
  → Worst-Case Scenario: if no students can eat, every student cycles through the queue once per round. Each shift operation takes O(N), and in the worst case, this can repeat up to O(N) times. Total worst case: O(N) \* O(N) = O(N²).
  <br>
- **Space Complexity:** $O(1)$ <br>
  → The algorithm modifies the input arrays in place and does not create additional data structures. The only extra variable is count, which is O(1) space.
