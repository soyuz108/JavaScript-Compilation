/* Given an array of integers your solution should find the smallest integer. */

// Classic function
function findSmallestInt(arr) {
  if (arr.length) {
    // using spread syntax
    return Math.min(...arr);
  } else {
    return "The input is empty.";
  }
}

// Testing cases
console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(findSmallestInt([78, 56, 232, 12, 0])); // 0
console.log(findSmallestInt([1, -56, 232, 12, 8])); // -56
console.log(findSmallestInt([])); // The input is empty. - Infinity if not covered
