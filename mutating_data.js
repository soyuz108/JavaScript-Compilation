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
    const organism = {
      specimenNum,
      dna,
    //mutates one random DNA base to a different base
      mutate() {
        for (i in dna) {
          let oldBase = dna[i];
          while (dna[i] === oldBase) {
            dna[i] = returnRandBase();
          }
        }
        return this.dna;
      }
    }
    return organism;
};
console.log(pAequorFactory(1, mockUpStrand()));