/* You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

// Classic function
function getMiddle(str) {
  const index = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[index - 1] + str[index];
  } else {
    return str[index];
  }
}

// Testing cases
console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
console.log(getMiddle("middle")); // dd
console.log(getMiddle("A")); // A

// One line function
function getMiddle(str) {
	const index = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str[index - 1] + str[index] : str[index];
}
