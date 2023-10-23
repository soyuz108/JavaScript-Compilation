/* A palindrome is a word or sentence that is spelled the same way both forward and backward. 
The function will check if the string provided is a palindrome. */

// Classic function
function checkPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (
    str.toLowerCase().split(" ").join("") ===
    reversedStr.toLowerCase().split(" ").join("")
  ) {
    return `The word or sentence, "${str}", is a palindrome.`;
  } else {
    return `The word or sentence, "${str}", is not a palindrome.`;
  }
}

console.log(checkPalindrome("may a moody baby doom a yam")); // The word or sentence, "may a moody baby doom a yam", is a palindrome.
console.log(checkPalindrome("Anna")); // The word or sentence, "Anna", is a palindrome.
console.log(checkPalindrome("You can do it!")); // The word or sentence, "You can do it!", is not a palindrome.