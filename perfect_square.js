/* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. */

// Classic function
function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if (root === Math.round(root)) {
    return (root + 1) ** 2;
  } else {
    return -1;
  }
}

// Testing cases
console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(319225)); // 320356

// One line function 
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

