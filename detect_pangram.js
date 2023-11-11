/* A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

// Calssic function
function isPangram(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alpha.length; i++) {
    if (str.toLowerCase().indexOf(alpha[i]) < 0) {
      return false;
    }
  }
  return true;
}

// Testing cases
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false
console.log(isPangram("")); // false

// Simplified function
function isPangram(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  // whether all elements in the array pass the test
  return alpha.every((e) => str.toLowerCase().includes(e));
}