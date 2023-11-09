/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number. */

function sumMix(arr) {
  return arr.map(e => Number(e)).reduce((a, b) => a + b, 0);
}

// Testing cases
console.log(sumMix([9, 3, "7", "3"])); // 2
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 42
console.log(sumMix([0, "0"])); // 0
console.log(sumMix([])); // 0