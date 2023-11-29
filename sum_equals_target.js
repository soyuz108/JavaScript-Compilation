/* Write a function that takes an array of numbers and a target number. 
It should find two different items that, when added together, give the target value. 
The indices of these items should then be returned in the array. 
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers. 
The target number will always be the sum of two different items from that array). */

// Classic function
function checkTarget(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let e1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let e2 = numbers[j];
      if (e1 + e2 === target) {
        return [i, j];
      }
    }
  }
}

// Testing cases
console.log(checkTarget([1, 2, 3], 4)); // [ 0, 2 ]
console.log(checkTarget([1234, 5678, 9012], 14690)); // [ 1, 2 ]
console.log(checkTarget([2, 2, 3], 4)); // [0, 1]
console.log(checkTarget([2, 3, 1], 3)); // [ 0, 2 ]