/* Take 2 strings s1 and s2 including only letters from A to Z. 
Return a new sorted string containing only distinct letters, the longest out of the two options. */

// Classic function
function returnLongest(s1, s2) {
  if (!s1 || !s2) {
    return "Error: one or both inputs are empty";
  } else {
    let s1Unique = "";
    let s2Unique = "";

    for (let i = 0; i < s1.length; i++) {
      if (s1Unique.includes(s1[i]) === false) {
        s1Unique += s1[i];
      }
    }
    for (let i = 0; i < s2.length; i++) {
      if (s2Unique.includes(s2[i]) === false) {
        s2Unique += s2[i];
      }
    }

    const s1Sorted = s1Unique.split("").sort().join("");
    // using regex for non-BMP character sets /(?!$)/u
    const s2Sorted = s2Unique.split("").sort().join("");

    if (s1Sorted.length > s2Sorted.length) {
      return s1Sorted;
    } else {
      return s2Sorted;
    }
  }
}

// Testing valid cases
console.log(returnLongest("aretheyhere", "yestheyarehere")); // aehrsty
console.log(
  returnLongest("loopingisfunbutdangerous", "lessdangerousthancoding")
); // abdefgilnoprstu

// Testing invalid cases
console.log(returnLongest("", "testingemptystring")); // Error: one or both inputs are empty
console.log(returnLongest("", "")); // Error: one or both inputs are empty
