/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. 
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers) {
  const numArray = numbers.split(" ").map((e) => Number(e));
  return [Math.max(...numArray), Math.min(...numArray)].join(" ");
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Testing cases
console.log(highAndLow("1 2 3 4 5")); // 5 1
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 -9
console.log(highAndLow("1 9 0 4 5")); // 9 0
console.log(highAndLow("5")); // 5 5