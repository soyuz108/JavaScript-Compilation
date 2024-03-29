/* Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the sides of given length and false in any other case. */

function isTriangle(a, b, c) {
  if (a && b && c) return a + b > c && b + c > a && a + c > b;
  else return "One of the parameters is empty."
}

// Testing cases
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(8, 5)); // One of the parameters is empty.
console.log(isTriangle(6, -2, 1)); // false
console.log(isTriangle(0, 3, 8)); // One of the parameters is empty.