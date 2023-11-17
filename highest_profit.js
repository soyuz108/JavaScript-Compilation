/* You have a very simple idea to make some profit: you buy something and sell it. 
Of course, this wouldn't give you any profit at all if you were simply to buy and sell it at the same price. 
Instead, you're going to buy it for the lowest possible price and sell it at the highest.
Write a function that returns both the minimum and maximum number of the given list/array. */

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Testing cases
console.log(minMax([1, 2, 3, 4, 5])); // [ 1, 5 ]
console.log(minMax([2334454, 5])); // [ 5, 2334454 ]
console.log(minMax([1])); // [ 1, 1 ]
