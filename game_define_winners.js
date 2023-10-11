/* Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

- Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
- If the value is the same they both perish.
- If one of the values is empty (different array lengths) the non-empty value soldier survives.
- To survive the defending side must have more survivors than the attacking side.
- In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. 
- If the total attack power of both sides is the same return true.
- The initial attack power is the sum of all the values in each array. */

// Classic function
function hasSurvived(attackers, defenders) {
  let longestArray = attackers.length;
  if (longestArray < defenders.length) {
    longestArray = defenders.length;
  }

  let attackersSurvivors = 0;
  let defendersSurvivors = 0;

  for (let i = 0; i < longestArray; i++) {
    if (attackers[i] > defenders[i]) {
      attackersSurvivors++;
    } else if (attackers[i] < defenders[i]) {
      defendersSurvivors++;
    }
  }

  if (attackersSurvivors == defendersSurvivors) {
    const initialPowerAttackers = attackers.reduce((a, b) => a + b, 0);
    const initialPowerDefenders = defenders.reduce((a, b) => a + b, 0);
    if (initialPowerAttackers <= initialPowerDefenders) {
      return true;
    } else {
      return false;
    }
  } else if (attackersSurvivors < defendersSurvivors) {
    return true;
  } else {
    return false;
  }
}

// Testing opposite cases
console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); // false
console.log(hasSurvived([], [1, 2, 3])); // true

// Basic tests
const chai = require("chai");
const assert = chai.assert;

describe("Solution", function () {
  it("Basic Tests", function () {
    assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
    assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
    assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
    assert.strictEqual(hasSurvived([1, 2, 3], []), false);
    assert.strictEqual(
      hasSurvived(
        [32, 65, 21, 83, 85, 7, 71, 45, 20, 63],
        [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]
      ),
      false
    );
  });
});
