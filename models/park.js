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

}

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

Park.prototype.visitorsPerDay = function(){
  let total = 0;
  for (const dino of this.collectionOfDinos){
    total += dino.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.visitorsPerYear = function(){
  return this.visitorsPerDay() * 365.25;
};

Park.prototype.totalRevenuePerYear = function(){
  return this.visitorsPerYear() * this.ticketPrice;
};

Park.prototype.dinoDiets = function(){
  const dinoDiets = {'carnivore': 0, 'herbivore':0, 'omnivore':0};
  for (const dino of this.collectionOfDinos){
    if (dino.diet === 'carnivore'){
      dinoDiets.carnivore ++;
    } else if (dino.diet === 'herbivore'){
      dinoDiets.herbivore ++;
    } else if (dino.diet === 'omnivore'){
      dinoDiets.omnivore ++;
    }
  }
  return dinoDiets;
};

module.exports = Park;