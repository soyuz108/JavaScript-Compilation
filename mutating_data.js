// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an organism with a mutated DNA
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    //mutates one random DNA base to a different base
    mutate() {
      let randomIndex = [Math.floor(Math.random() * this.dna.length)]; // get a random index of the current base to mutate
      let newBase;
      do {
        newBase = returnRandBase();
      } while (this.dna[randomIndex] === newBase); // replace with a random rand base if they are the same

      return this.dna;
    },
    // compares a new DNA with the old one and finds a percentage of the difference
    compareDNA(pAequorObj) {
      let matchCount = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (pAequorObj.dna[i] === this.dna[i]) {
          matchCount++;
        }
      }
      let percentageMatch = ((matchCount / this.dna.length) * 100).toFixed(2);
      console.log(
        `Specimen #${this._specimenNum} and specimen #${pAequorObj._specimenNum} have ${percentageMatch}% DNA in common.`
      );
      return percentageMatch;
    },
    // returns true if at least 60% bases are C or G
    willLikelySurvive() {
      let count = 0;
      //
      this.dna.forEach((element) => {
        if (element === "C" || element === "G") {
          count++;
        }
      });
      if (count / this.dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
    // method to return the complementary DNA strand( A <-> T, C <-> G)
    complementStrand() {
      let complStrand = [];
      for (let base of this.dna) {
        switch (base) {
          case "A":
            compStrand.push("T");
            break;
          case "T":
            compStrand.push("A");
            break;
          case "C":
            compStrand.push("G");
            break;
          case "G":
            compStrand.push("C");
            break;
        }
      }
      return complStrand;
    },
  };
};
console.log(pAequorFactory(1, mockUpStrand()));
