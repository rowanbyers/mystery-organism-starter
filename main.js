// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand())
// My Code Below...
const pAequorFactory = (specimenNum, dna) => {
  //console.log(dna)
  return {
    specimenNum,
    dna,
    mutate() {
      const randLoc = Math.floor(Math.random()*dna.length)
      //console.log(randLoc)
      const myBase = dna[randLoc]
      //console.log(myBase)
      const randBase = returnRandBase()
      //console.log(randBase)
      while (myBase == randBase) {
        returnRandBase()
        break;
      }
      if (myBase !== randBase) {
        dna.splice(randLoc, 1, randBase);
      }
      return dna
      //console.log(dna)
    },
    compareDNA(array) {
      let count = 0
      for (let i = 0; i < array.length; i++) {
        if (dna[i] === array[i]) {
          count++
        }
      }
      //console.log(count)
      const percentCount = (count/array.length * 100).toFixed(2)
      console.log(`The two specemins have ${percentCount}% of common DNA`)
      //console.log (array)
      //console.log(dna)
    },
    willLikleySurvive() {
      let goodGenes = 0
      for (let i = 0; i < 15; i++) {
        //console.log(dna[i])
        if (dna[i] == 'G' || dna[i] == 'C') {
          goodGenes++
        }
      }
      //console.log(goodGenes)
      const goodGenesPercent = goodGenes/dna.length * 100
        //console.log(goodGenesPercent)
        if (goodGenesPercent >= 60) {
          return true
        }
        else {
          return false
        }
    },
    complimentStrand() {
      const complimentArr = []
      for (let i = 0; i < dna.length; i++) {
        switch (dna[i]){
          case 'A':
            complimentArr.push('T')
            break
          case 'T':
            complimentArr.push('A')
            break
          case 'C':
            complimentArr.push('G')
            break
          case 'G':
            complimentArr.push('C')
            break
        };
      }
      return complimentArr
    }
  }
}

const pAequor1 = pAequorFactory(1,mockUpStrand())
const pAequor2 = pAequorFactory(2,mockUpStrand())
//pAequor1.mutate()
//pAequor1.compareDNA(pAequor2.dna)
//console.log(pAequor1.willLikleySurvive())
console.log(pAequor1.complimentStrand())

const pAequorArray = []
  for (i = 1; pAequorArray.length < 30; i++) {
    if (pAequorFactory(i, mockUpStrand()).willLikleySurvive() == true) {
    pAequorArray.push(pAequorFactory(i, mockUpStrand()))
    }
  }
//console.log(pAequorArray)

