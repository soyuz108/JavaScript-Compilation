/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}. */

// Classic function
function count(str) {
  if (str) {
    let pairs = {};
    const letters = str.toLowerCase().split("");
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] in pairs) {
        pairs[letters[i]]++;
      } else {
        pairs[letters[i]] = 1;
      }
    }
    return pairs;
  } else {
    return {};
  }
}

// Testing cases
console.log(count("a")); // { a: 1 }
console.log(count("ab")); // { a: 1, b: 1 }
console.log(count("")); // {}
console.log(count("aba")); // { a: 2, b: 1 }
console.log(count("Aab")); // { a: 2, b: 1 }
console.log(count("Hello World")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }