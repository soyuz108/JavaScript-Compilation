/* The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate. */

// Classic function
function duplicateEncode(word) {
  // check if used more than once
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    if (letter in obj) {
      obj[letter] = ")";
    } else {
      obj[letter] = "(";
    }
  }

  let result = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    result += obj[letter];
  }

  return result;
}

// Testing cases
console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((

// Simplified function
function duplicateEncode(word) {
  return (
    word
      .toLowerCase()
      .split("")
      // (currentItem, index, array)
      .map((c, i, a) => (a.indexOf(c) == a.lastIndexOf(c) ? "(" : ")"))
      .join("")
  );
}