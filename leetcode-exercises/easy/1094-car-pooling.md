# 1094. Car Pooling

#medium #google #past-interview #array

There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

Constraints:

1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105

## Solution 1

1. Initialize a passenger change array

   - Define a constant TRIP_RANGE = 1000 because the problem guarantees that all pickup (from) and drop-off (to) points are within 0–1000 km from the starting point.

   - Create an array tripLocationArray of size TRIP_RANGE + 1, filled with zeros, to store the net change in passenger count at each location.
   - Using TRIP_RANGE means we can pre-allocate a fixed-size array, iterate through it in constant time, avoid sorting, and keep the logic simple — at the cost of a small, fixed amount of extra memory.

2. Record passenger changes from trips

   - For each trip [numPassengers, from, to]:
   - Increment tripLocationArray[from] by numPassengers (pickup).
   - Decrement tripLocationArray[to] by numPassengers (drop-off).

3. Simulate the journey and check capacity

   - Start with currentPassengers = 0.
   - Iterate from location 0 to TRIP_RANGE:
   - Add tripLocationArray[i] to currentPassengers to apply all changes at this point.
   - If currentPassengers ever exceeds capacity, return false immediately.

4. Return result

   - If the loop completes without exceeding capacity at any point, return true.

⸻

```javascript
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  if (trips[0][0] > capacity) return false
  const TRIP_RANGE = 1000
  let tripLocationArray = new Array(TRIP_RANGE + 1).fill(0)

  for (const [numPassengers, from, to] of trips) {
    tripLocationArray[from] += numPassengers
    tripLocationArray[to] -= numPassengers
  }

  let currentPassengers = 0
  for (let i = 0; i <= TRIP_RANGE; i++) {
    currentPassengers += tripLocationArray[i]
    if (currentPassengers > capacity) return false
  }
  return true
}
```

### 📝 LeetCode Solution

🔗 [View on LeetCode](https://leetcode.com/problems/car-pooling/submissions/1626583937/)

### 📈 Complexity Analysis

**Time Complexity:** $O(TRIP\_RANGE + t)$ <br>
→ We iterate once through all `t` trips to record passenger changes (**O(t)**).  
→ Then we sweep through all possible locations from `0` to `TRIP_RANGE` (**O(TRIP_RANGE)**).  
→ Since `TRIP_RANGE` is fixed at `1000`, the sweep is effectively **O(1)** relative to input size, making the overall complexity **O(t)** in practical terms.

**Space Complexity:** $O(TRIP\_RANGE)$ <br>
→ We allocate an array of size `TRIP_RANGE + 1` to store passenger changes at each location.  
→ This is constant space in the context of the problem constraints (max 1001 integers), so the memory usage does not grow with the number of trips.
<br>
<br>
