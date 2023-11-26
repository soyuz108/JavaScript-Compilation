/* Your task is to find the first element of an array that is not consecutive.
If the whole array is consecutive then return null. 
The array will always have at least 2 elements1 and all elements will be numbers. 
The numbers will also all be unique and in ascending order. The numbers could be positive or negative. */

// Variant by comparison
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > 1) return arr[i + 1];
  }
  return null;
}

// Variant by non-equality
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
  }
  return null;
}

// Testing cases
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4])); // null
console.log(firstNonConsecutive([1])); // null
console.log(firstNonConsecutive([])); // null