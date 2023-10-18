/* Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
If the x equals to 0 that means no steps w */

// Classic function
function countBy(n, x) {
  if (x > 0) {
    let result = [n];
    let counter = 1;
    // instantiate outside the loop to layer the updates
    let step = n;
    while (counter < x) {
      step += n;
      counter++;
      result.push(step);
    }
    return result;
  } else {
    return [];
  }
}

// Testing cases
console.log(countBy(1, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(countBy(2, 5)); // [ 2, 4, 6, 8, 10 ]
console.log(countBy(5, 0)); // [ ]

// return Array(n).fill(x).map((e, i) => e * (i + 1));
