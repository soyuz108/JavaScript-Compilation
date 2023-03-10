// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Use Luhn algorithm to validate a credit card number and return True/False
const validateCred = (card) => {
  let sum = 0;
  // add the check digit that isn"t doubled
  sum += card[card.length - 1];
  // double every other digit excpet for the check digit on the right
  for (let i = card.length - 2; i >= 0; i -= 2) {
    let doubled = (card[i] * 2);
    // if num is greater than 9 after doubling, subtract 9
    if (doubled > 9) {
      doubled -= 9;
    }
    sum += doubled;
  }
  // add digits that are not doubled
  for (let i = card.length - 3; i >= 0; i -= 2) {
    sum += card[i];
  }
  // validate a card on the sum modulo
  return (sum % 10 == 0) ? true : false;
};
console.log(validateCred(valid1)); // true
console.log(validateCred(invalid5)); // false

// Return a nested array of invalid cards
const findInvalidCards = (batch) => {
  let invalidCards = [];
  for (i = 0; i < batch.length; i++) {
    if (!validateCred(batch[i])) {
      invalidCards.push(batch[i]);
    }
  }
  return invalidCards;
};
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);

// List companies that may have issued invalid cards
const idInvalidCardCompanies = () => {
  const invalidCardCompanies = [];
  // loop through the invalid cards list to get separate cards
  for (let i = 0; i < invalidCards.length; i++) {
    const badCard = invalidCards[i];
    // loop through each card to check on the first digit and populate the companies list
    for (let j = 0; j < 1; j++) {
      switch (badCard[j]) {
        case badCard[j][0] = 3:
          invalidCardCompanies.push("Amex");
          break;
        case badCard[j][0] = 4:
          invalidCardCompanies.push("Visa");
          break;
        case badCard[j][0] = 5:
          invalidCardCompanies.push("MasterCard");
          break;
        case badCard[j][0] = 6:
          invalidCardCompanies.push("Discover");
          break;
        default: 
          invalidCardCompanies.push("Company not found");
      }
    }
  }
  // filter on the companies list for unique values only
  return invalidCardCompanies.filter((a, b) => invalidCardCompanies.indexOf(a) === b);
};
console.log(idInvalidCardCompanies()); // [ 'Visa', 'MasterCard', 'Amex', 'Discover' ]
