/* Return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

// Classic function
function duplicateCount(str) {
  if (str) {
    let regex = str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g);
    if (regex !== null) {
      return regex.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

// Test cases
console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Valentyna")); // 2

// One line function
function duplicateCount(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}