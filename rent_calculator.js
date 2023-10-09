/* Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total. 
The function must return the total amount for different days.*/


// Classic function
function rentalCarCost(d) {
  const price = 40;
  const total = price * d;
  if (d >= 7) {
    return total - 50;
  } else if (d >= 3) {
    return total - 20;
  } else {
    return total;
  }
}

// Refactored
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

// Valid tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Regular Tests:", function () {
  it("Should work for under 3 days:", function () {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it("Should work for under 7 days:", function () {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(6), 220);
  });

  it("Should work for 7 or more days:", function () {
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});