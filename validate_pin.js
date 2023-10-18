/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false. */

// Classic function
function validatePIN(pin) {
  if (pin.length == 4 || pin.length == 6) {
    if (/^\d+$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Testing cases
console.log(validatePIN("1234567")); // false
console.log(validatePIN("0000")); // true
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("090909")); // true

// One line regex function
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}