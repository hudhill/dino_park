const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinos = [];
};

Park.prototype.addDino = function(dino){
  this.collectionOfDinos.push(dino);
};

Park.prototype.removeDino = function(dino){
  const index = this.collectionOfDinos.indexOf(dino);
  this.collectionOfDinos.splice(index, 1);
};

Park.prototype.removeDinosBySpecies = function(species){
  const dinosOfGivenSpecies = [];
  for (const dino of this.collectionOfDinos){
    if (dino.species !== species){
      dinosOfGivenSpecies.push(dino);
    }
  }
  this.collectionOfDinos = dinosOfGivenSpecies
};
//refactored:
Park.prototype.refactoredRemoveDinosBySpecies = function(species){
  this.collectionOfDinos = this.collectionOfDinos.filter(dino => dino.species !== species);
};

Park.prototype.dinoThatAttractsMostVisitors = function(){
  let dinoWithMost = this.collectionOfDinos[0];
  for (const dino of this.collectionOfDinos){
    if (dino.guestsAttractedPerDay > dinoWithMost.guestsAttractedPerDay){
      dinoWithMost = dino;
    }
  }
  return dinoWithMost;
};

Park.prototype.dinosOfGivenSpecies = function(species){
  const dinos = [];
  for (const dino of this.collectionOfDinos){
    if (dino.species === species){
      dinos.push(dino);
    }
  }
  return dinos;
};
//refactored:
Park.prototype.refactoredDinosOfGivenSpecies = function(species){
  return this.collectionOfDinos.filter(dino => dino.species === species);
};

Park.prototype.visitorsPerDay = function(){
  let total = 0;
  for (const dino of this.collectionOfDinos){
    total += dino.guestsAttractedPerDay;
  }
  return total;
};
// refactored:
Park.prototype.refactoredVisitorsPerDay = function(){
  return this.collectionOfDinos.reduce((acc, dino) => {
    return acc += dino.guestsAttractedPerDay;
  }, 0);
}

Park.prototype.visitorsPerYear = function(){
  return this.visitorsPerDay() * 365.25;
};

Park.prototype.totalRevenuePerYear = function(){
  return this.visitorsPerYear() * this.ticketPrice;
};

Park.prototype.dinoDiets = function(){
  const dinoDiets = {};
  for (const dino of this.collectionOfDinos){
    if (dinoDiets[dino.diet]){
      dinoDiets[dino.diet] ++;
    } else {
      dinoDiets[dino.diet] = 1;
    }
  }
  return dinoDiets;
};

module.exports = Park;