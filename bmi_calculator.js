/* Write a function that calculates body mass index (bmi = weight / height2).
- if bmi <= 18.5 return "Underweight"
- if bmi <= 25.0 return "Normal"
- if bmi <= 30.0 return "Overweight"
- if bmi > 30.0 return "Obese" */

// Classic function
function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30.0) {
    return "Obese";
  } else {
    return "Invalid input";
  }
}

// Testing cases
console.log(bmi(80, 1.80)); // Normal
console.log(bmi(120, 1.68)); // Obese

// Variant in one line
function bmi(weight, height) {
  const bmi = weight/Math.pow(height, 2);
return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

