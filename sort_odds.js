/* You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. */

// Classic function
function sortArray(arr) {
  let evenArr = [];
  let oddArr = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }

  oddArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }

  return result;
}

// Testing cases
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 2, 8, 5, 4 ]
console.log(sortArray([])); // []
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([7, 1])); // [ 1, 7 ]

// Simplified function
function sortArray(arr) {
  // number % 2 is 0 (so False) if number is even
  const oddArr = arr.filter((x) => x % 2).sort((a, b) => a - b);
  return arr.map((x) => (x % 2 ? oddArr.shift() : x));
}