/* Implement the function which takes as argument a sequence and returns a list of items without any elements 
with the same value next to each other and preserving the original order of elements. */

// Classic function
function uniqueInOrder(strArr) {
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1]) {
      result.push(strArr[i]);
    }
  }
  return result;
}

// Testing cases
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // [ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder("ABBCcAD")); // [ 'A', 'B', 'C', 'c', 'A', 'D' ]
console.log(uniqueInOrder([1,2,2,3,3])); // [ 1, 2, 3 ]

// Simplified function
function uniqueInOrder(strArr) {
  return [...strArr].filter((a, i) => a !== strArr[i - 1]);
}