/* People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. */

// Classic function
function get_Likes(names) {
  if (names.length === 0) {
    return `No one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Testing cases
console.log(get_Likes([])); // No one likes this
console.log(get_Likes(["Peter"])); // Peter likes this
console.log(get_Likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(get_Likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(get_Likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this

// Simplified conditional
function get_Likes(names) {
  return {
    0: "No one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  } [Math.min(4, names.length)];
}