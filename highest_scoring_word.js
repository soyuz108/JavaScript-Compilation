/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4). You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

// Classic function
function getHighest(x) {
  // create an object of word:score
  const words = x.split(" ");
  let pairs = {};
  // run thru the words
  for (let i = 0; i < words.length; i++) {
    let score = 0;
    for (let j = 0; j < words[i].length; j++) {
      score += words[i].charCodeAt(j) - 96;
    }
    // assign a word score
    pairs[words[i]] = score;
  }
  // get an index of the highest score
  const index = Object.values(pairs).indexOf(Math.max(...Object.values(pairs)));
  return Object.keys(pairs)[index];
}

// Testing cases
console.log(getHighest("man i need a taxi up to ubud")); // taxi
console.log(getHighest("what time are we climbing up the volcano")); // volcano
console.log(getHighest("aa b")); // aa
console.log(getHighest("d bb")); // d