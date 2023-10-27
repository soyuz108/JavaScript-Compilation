/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded by powerful dragons. Each dragon takes 2 bullets to be defeated. 
Assuming the hero is going to grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
The function has to return true if yes, false otherwise. */

// Classic function 
function isEnough(bullets, dragons) {
  const killAllDragons = dragons * 2;
  return bullets >= killAllDragons ? true : false;
}

// Testing cases
console.log(isEnough(10, 5)); // true
console.log(isEnough(7, 4)); // false
console.log(isEnough(4, 5)); // false
console.log(isEnough(100, 40));  // true
console.log(isEnough(1500, 751)); // false
console.log(isEnough(0, 1)); // false

function isEnough(bullets, dragons) {
  return bullets >= dragons * 2;
}