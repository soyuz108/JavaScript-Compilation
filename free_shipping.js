/* Complete the code below to display a message to e-commerce shoppers letting them know whether or not their order total qualifies them for free shipping. 
If shoppers’ orders total 75 dollars or more, return the freeShippingMessage, otherwise, return the freeShippingPromo.
*/

const freeShippingMessage =
  "Congrats! You are eligible for free shipping on this order.";

const freeShippingPromo =
  "Get free shipping on all orders of $75 dollars or more.";

function checkCartTotal(subTotal) {
  return subTotal >= 75 ? freeShippingMessage : freeShippingPromo;
}

console.log(checkCartTotal(78)); // Congrats! You are eligible for free shipping on this order.
console.log(checkCartTotal(24)); // Get free shipping on all orders of $75 dollars or more.