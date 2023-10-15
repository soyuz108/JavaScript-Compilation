/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. */

// Classic function
function defineMembership(data) {
  let statuses = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      statuses.push("Senior");
    } else {
      statuses.push("Open");
    }
  }
  return statuses;
}

// Testing cases
console.log(
  defineMembership([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
); // [ 'Open', 'Open', 'Senior', 'Open', 'Open', 'Senior' ]

console.log(
  defineMembership([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
); // [ 'Open', 'Open', 'Open', 'Open' ]

console.log(
  defineMembership([
    [59, 12],
    [55, -1],
    [12, -2],
    [72, 0],
  ])
); // [ 'Senior', 'Open', 'Open', 'Open' ]

// One line function
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
