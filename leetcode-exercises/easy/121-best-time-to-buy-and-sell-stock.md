# 121. Best Time to Buy and Sell Stock

#array #greed

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

**Example 1:**

Input: prices = [7,1,5,3,6,4]  
Output: 5  
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**

Input: prices = [7,6,4,3,1]  
Output: 0  
Explanation: In this case, no transactions are done and the max profit = 0.

**Constraints:**

- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

## Solution

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    const profit = prices[i] - minPrice
    maxProfit = Math.max(maxProfit, profit)
  }

  return maxProfit
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1756484829/)

### 📈 Complexity Analysis

**Time Complexity:** $ O(n) $ <br>
→ You loop through the array of prices once, doing constant-time operations (Math.min, subtraction, Math.max) at each iteration. So runtime grows linearly with the number of days (length of prices)  
**Space Complexity:** $O(1)$ <br>
→ You only store a few variables (minPrice, maxProfit, profit) regardless of input size. No extra data structures are used

  <br>
  <br>
