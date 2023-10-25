/* Implement a function that adds two numbers together and returns their sum in binary. 
The binary number returned should be a string. */

// Classic function
function addBinary(a, b) {
	if (a !== undefined && b !== undefined) {
		return (a + b).toString(2);
	} else {
		return "One or both of the parameters were not provided."
	}
}

// Testing cases
console.log(addBinary(1, 1)); // 10
console.log(addBinary(5, 9)); // 1110
console.log(addBinary(1)); // One or both of the parameters were not provided.
console.log(addBinary(0, 0)); // 0
console.log(addBinary()); // One or both of the parameters were not provided.