/* Your task is to write a function which returns the sum of following series upto nth term(parameter). 
- You need to round the answer to 2 decimal places and return it as String.
- If the given value is 0 then it should return 0.00
- You will only be given Natural Numbers as arguments.
Example: 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

// Classic function
function SeriesSum(n) {
  let div = 4;
  let result = 1;
  if (n === 0) {
    return "0.00";
  } else if (n === 1) {
    return result.toFixed(2);
  } else {
    result += 1 / div;
    for (let i = 2; i < n; i++) {
      div += 3;
      result += 1 / div;
    }
    return result.toFixed(2);
  }
}

// Testing cases
console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(3)); // 1.39
console.log(SeriesSum(0)); // 0.00

// Simplified function
function SeriesSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}