/* In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater or equal to p = 1200 inhabitants? */

// Classic function
function nbYear(p0, percent, aug, p) {
  let newPop = p0 + Math.floor(p0 * (percent / 100)) + aug;
  let years = 1;
  while (newPop < p) {
    newPop += Math.floor(newPop * (percent / 100)) + aug;
    years++;
  }
  return years;
}

// Testing cases
console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
console.log(nbYear(1000, 3.4, 130, 10000)); // 32


// Simplified function
function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    years++;
  }
  return years;
}