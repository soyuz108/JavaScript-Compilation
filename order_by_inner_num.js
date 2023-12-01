/* Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. */

// Using a helper function
function order(words) {
  if (words) {
    let result = words.split(" ").sort((a, b) => getNum(a) - getNum(b));
    return result.join(" ");
  }
  return "";
}

// to use multiple times
function getNum(word) {
  return Number(word.match(/\d+/g));
}

// Testing cases
console.log(order("is2 Thi1s T4est 3a")); // Thi1s is2 3a T4est
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Fo1r the2 g3ood 4of th5e pe6ople
console.log(order(""));
("");
console.log(order("3 6 4 2 8 7 5 1 9")); // 1 2 3 4 5 6 7 8 9

// Simplified function
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

// Classic function
function order(words) {
  const arr = words.split(" ");
  let sortedArr = [];

  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j].indexOf(i) >= 0) {
        sortedArr.push(arr[j]);
      }
    }
  }

  return sortedArr.join(" ");
}
