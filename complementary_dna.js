/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell) and returns the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

// Classic function
function DNAStrand(dna) {
  let complementary = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        complementary += "T";
        break;
      case "T":
        complementary += "A";
        break;
      case "G":
        complementary += "C";
        break;
      case "C":
        complementary += "G";
        break;
      default:
        console.log("Wrong input");
        break;
    }
  }
  return complementary;
} 

// Testing valid cases
console.log(DNAStrand("ATTGC")); // TAACG
console.log(DNAStrand("GCTAG")); // CGATC
console.log(DNAStrand("TAAC")); // ATTG
// One line variant
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);