# 1094. Car Pooling

## Solution

```javascript
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const TRIP_RANGE = 1000;
  let tripLocationArray = new Array(TRIP_RANGE + 1).fill(0);

  for (const [numPassengers, from, to] of trips) {
    tripLocationArray[from] += numPassengers;
    tripLocationArray[to] -= numPassengers;
  }

  let currentPassengers = 0;
  for (let i = 0; i <= TRIP_RANGE; i++) {
    currentPassengers += tripLocationArray[i];
    if (currentPassengers > capacity) return false;
  }
  return true;
};
```

### 📈 Complexity Analysis

- **Time Complexity:** $ O(n) $ <br>
  → Initializing tripLocationArray is O(1). It is always size 1001 so consider as constant. <br>
  → Processing trips is O(n), where n is the number of trips.
  → Simulating the trip is O(1001). Fixed size is consider as O(1) <br>
  → Final Time Complexity → O(n)

  <br>

- **Space Complexity:** $O(1)$ <br>
  → TripLocationArray → O(1) → always 1001 elements (fixed size) <br>
  → No other major space usage <br>
  → Final Space Complexity → O(1)
