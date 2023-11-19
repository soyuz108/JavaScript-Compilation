/* Here you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it, e.g. "a" = 1, "b" = 2, etc. */

// Classic function
function alphabetPosition(text) {
  let result = [];

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    // get char code of char (0 index coz it's always one char, default)
    let charCode = char.toUpperCase().charCodeAt(0);
    // check if char is letter
    if (charCode < 91 && charCode > 64) {
      // get alphabet position out of char code
      result.push(charCode - 64);
    }
  }

  return result.join(" ");
}

// Testing cases
console.log(alphabetPosition("Hello World")); // 8 5 12 12 15 23 15 18 12 4
console.log(alphabetPosition("$rhru!-$")); // 18 8 18 21
console.log(alphabetPosition("wwz+")); // 23 23 26
console.log(alphabetPosition("")); // " "