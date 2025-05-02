# 341. Flatten Nested List Iterator

## Solution

```javascript
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = this.flatten(nestedList);
  this.index = 0;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.flatten = function (nestedList) {
  let result = [];

  for (let nested of nestedList) {
    if (nested.isInteger()) {
      result.push(nested.getInteger());
    } else {
      result.push(...this.flatten(nested.getList()));
    }
  }

  return result;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.index < this.flattened.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.flattened[this.index++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → So it takes O(N) time at initialization, where N = total number of integers and nested lists (elements).
  → next() and hasNext() → O(1) because they just check the index or read from flattened array.
  <br>
  <br>
- **Space Complexity:** $O(n)$ <br>
  → store ALL integers upfront in this.flattened. The space is O(N), where N is number of integers.
