/* Complete the solution so that the function will break up camel casing, using a space between words. */

// Classic function
function breakCamel(str) {
  let arr = Array.from(str);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = " " + arr[i];
    }
  }
  return arr.join("");
}

// Testing cases
console.log(breakCamel("camelCasing")); // camel Casing
console.log(breakCamel("identifier")); // identifier
console.log(breakCamel("")); // ""

// Using regex
function breakCamel(string) {
  // $1 is a grouped match (in this case an Uppercase letter) that is replaced with a space and a group
  return string.replace(/([A-Z])/g, " $1");
}