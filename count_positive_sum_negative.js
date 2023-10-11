/* Given an array of integers. Return an array, where the first element is the count of positives and the second element is the sum of negatives.
Zero is neither positive nor negative. If the input is an empty array or is null, return an empty array. */

// Classic function
function countPositivesSumNegatives(input) {
  if (input && input != 0) {
    const positives = input.filter((num) => num > 0);
    const negatives = input.filter((num) => num < 0);
    const positivesCount = positives.length;
    const negativesSum = negatives.reduce((a, b) => a + b, 0);
    return [positivesCount, negativesSum];
  } else {
    return [];
  }
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(countPositivesSumNegatives([])); // Empty array []

// Basic tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for valid tests", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  });

  it("Testing for invalid tests", () => {
    let testData = [];
    let actual = countPositivesSumNegatives(testData);
    let expected = [];
    assert.deepEqual(actual, expected);
  });
});
