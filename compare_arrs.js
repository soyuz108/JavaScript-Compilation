/* Given two arrays write a function that checks whether they have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears) regardless of the order. 
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false. */

function compare(arr1, arr2) {
  if (arr1 && arr2) {
    const squaredSorted = arr1.map((e) => e ** 2).sort((a, b) => a - b);
    const sorted = arr2.sort((a, b) => a - b);
    //if (JSON.stringify(squaredSorted) == JSON.stringify(sorted)) return true;
    return squaredSorted.every((a, i) => a === sorted[i]);
  }
  return false;
}

// Testing cases
console.log(
  compare(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
); // true

console.log(compare([2, 1, 3], [18, 1, 2])); // false
console.log(compare([], [])); // true
console.log(compare(null, [])); // false