#155. Min Stack

## Solution

```javascript
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    this.minStack[this.minStack.length - 1] >= val
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return;
  let popped = this.stack.pop();
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

## 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/min-stack/solutions/6410571/easy-solution-beginner-by-infoadrianasat-mosg/)

## 📈 Complexity Analysis

- **Time Complexity:** $ O(1) $ <br>
  → push: O(1)
  → pop: O(1)
  → top: O(1)
  → getMin: O(1)
  <br>
- **Space Complexity:** $O(n)$ <br>
  → where n is the number of elements in the stack, as we maintain two stacks of size n.
