/* In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. 
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced with letters not from a to m.
You have to return the error rate of the printer as a string representing a number of errors in the following format - "8/22".
The string has a length greater or equal to one and contains only letters from ato z. */


// Classic function
function printerErrors(str) {
  const errorCodes = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const strToArray = str.split("");
  let countError = 0;
  
  for (let i = 0; i < strToArray.length; i++) {
    for (let j = 0; j < errorCodes.length; j++) {
      if (strToArray[i] === errorCodes[j]) {
        countError += 1;
      }
    }
  }
  
  return `${countError}/${str.length}`;
}

// Testing cases 
console.log(
  printerErrors("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
); // 3/56
console.log(printerErrors("aaaxbbbbyyhwawiwjjjwwm")); // 8/22


// Regex one line function
const printerErrors = str => `${str.match(/[n-z]/gi).length}/${str.length}`;