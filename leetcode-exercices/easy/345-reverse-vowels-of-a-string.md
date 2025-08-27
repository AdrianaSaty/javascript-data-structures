# 345. Reverse Vowels of a String

#string #array #two-pointers #simulation

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

**Example 1:**  
Input: s = "IceCreAm"  
Output: "AceCreIm"  
Explanation:  
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

**Example 2:**  
Input: s = "leetcode"  
Output: "leotcede"

**Constraints:**

- 1 <= s.length <= 3 \* 105
- s consist of printable ASCII characters.

## Solution 1

1. Convert the string into an array so characters can be swapped easily.
2. Use two pointers:
   - leftPointer starts at the beginning of the array.
   - rightPointer starts at the end.
3. Move both pointers toward each other:
   - If both characters are vowels, swap them.
   - If the left character is not a vowel, move the left pointer right.
   - If the right character is not a vowel, move the right pointer left.
4. Repeat the process until the pointers meet or cross.
5. Join the array back into a string and return it. <br>

```javascript
/**
 * @param {string} s
 * @return {string}
 */

const isVowel = (letter) => {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
  )
}

var reverseVowels = function (s) {
  const sArray = s.split("")
  let leftPointer = 0
  let rightPointer = sArray.length - 1

  while (leftPointer <= rightPointer) {
    if (isVowel(sArray[leftPointer]) && isVowel(sArray[rightPointer])) {
      const temp = sArray[leftPointer]
      sArray[leftPointer] = sArray[rightPointer]
      sArray[rightPointer] = temp
      rightPointer--
      leftPointer++
    } else if (isVowel(sArray[leftPointer])) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
  return sArray.join("")
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1735019339/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ Each character is checked at most once as the two pointers move toward each other  
 → Total runtime grows linearly with the input string length <br>

**Space Complexity:** $O(n)$ <br>
→ Strings are immutable in JavaScript, so we use an array to manipulate characters.  
 → The space used is proportional to the input size.

  <br>
  <br>

## Solution 2 - Refactored Solution 1

This version improves both readability and efficiency by:

1. a Set for vowels instead of multiple || comparisons — making the isVowel check cleaner and faster.
2. Simplifying the main loop using two while loops to skip non-vowel characters — reducing nested conditionals.
3. Using simpler variable names (left, right) and array destructuring for the swap.

✅ Why This Is Better:

- Cleaner Vowel Check: Using .has() on a Set is faster and cleaner than chaining multiple || comparisons.
- Simpler Logic Flow: The early while skips reduce the need for complex if/else blocks inside the main loop.
- Improved Readability: Shorter variable names and separation of responsibilities (finding vowels vs. swapping) improve maintainability.
- Slight Performance Gain: In practice, using a Set gives near constant-time lookups vs checking 10 conditions with ||.

```javascript
/**
 * @param {string} s
 * @return {string}
 */

const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
const isVowel = (char) => vowelSet.has(char)

var reverseVowels = function (s) {
  const sArray = s.split("")
  let left = 0
  let right = sArray.length - 1

  while (left < right) {
    while (left < right && !isVowel(sArray[left])) left++
    while (left < right && !isVowel(sArray[right])) right--
    const temp = sArray[left]
    sArray[left] = sArray[right]
    sArray[right] = temp
    left++
    right--
  }
  return sArray.join("")
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1735019339/?envType=problem-list-v2&envId=2mxn884m)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ Each character is checked at most once by the two pointers
→ Set.has() runs in O(1) time on average

**Space Complexity:** $O(n)$ <br>
→ Extra space is used for the character array and the vowel Set, but both scale linearly or remain constant with input size

  <br>
  <br>

## isVowel implementation

This section compares three common implementations for checking whether a character is a vowel in JavaScript. We'll evaluate them based on performance, readability, and use cases.

### 1. Using Multiple `===` Comparisons

```js
const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
const isVowel = (char) => vowelSet.has(char)
```

#### Complexity

- **Time Complexity**: O(1) — Up to 10 comparisons, no loops or function calls.
- **Space Complexity**: O(1) — No data structures used.

#### Pros

- Extremely fast for small input.
- No memory overhead.

#### Cons

- Verbose and harder to maintain or extend.
- Poor scalability and readability. Best case: the vowel is 'a' → first check succeeds → fast. Worst case: it’s 'U' → 10 checks → slowest path. So, runtime varies depending on where the match is.

#### Best For

- Micro-optimized scenarios.
- Performance-critical paths in hot loops.

#### 2. Using String `.includes()`

```js
const isVowel = (char) => "aeiouAEIOU".includes(char)
```

#### Complexity

- **Time Complexity**: O(n) — Where n is the number of characters in the string (10 in this case).
- **Space Complexity**: O(1) — Constant memory use.

#### Pros

- Concise and readable.
- Easy to modify.

#### Cons

- Internally iterates over the string.
- Slightly slower than direct comparisons.

#### Best For

- Readable code where performance is not the bottleneck.
- General-purpose use.

---

### 3. Using a `Set`

```js
const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
const isVowel = (char) => vowelSet.has(char)
```

#### Complexity

- **Time Complexity**: O(1) — Set lookup is constant time.
- **Space Complexity**: O(1) — Stores 10 characters in memory. The space complexity for that specific use case is effectively O(1)—constant space—since it's always storing just 10 elements.

#### Pros

- Very fast lookup for repeated checks.
- Clean, scalable, and maintainable.

#### Cons

- Slightly more verbose than `.includes()`.

#### Best For

- Repeated or large-scale checks.
- Clean and maintainable code.

---

## ✅ Summary

| Method        | Time Complexity | Space Complexity  | Readability | Performance | Best Use Case                         |
| ------------- | --------------- | ----------------- | ----------- | ----------- | ------------------------------------- |
| `===` Chain   | O(1)            | O(1)              | Low         | ⭐⭐⭐⭐    | Micro-optimizations, very small scale |
| `.includes()` | O(n)            | O(1)              | High        | ⭐⭐        | General use, concise code             |
| `Set.has()`   | O(1)            | O(1) (fixed size) | High        | ⭐⭐⭐⭐⭐  | Repeated use, scalable logic          |

For most real-world applications, **`Set.has()`** provides the best trade-off between performance and maintainability.

Since `isVowel` is always comparing against a fixed set of 10 vowels, both `===` Chain and `Set.has()` offer constant time complexity (O(1)). However, they differ slightly in space complexity and consistency:

- The `===` chain has zero additional memory cost and can be slightly faster in the best case (e.g., checking `'a'`).
- `Set.has()` uses a fixed, pre-allocated set, so the memory usage is still constant — but it offers more **consistent performance** regardless of which character is being checked.

For **cleaner code and stable performance**, even with just 10 letters, `Set.has()` is the better overall choice — especially if the function is used frequently.
