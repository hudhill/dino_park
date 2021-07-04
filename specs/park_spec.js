const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;

  beforeEach(function () {
    park = new Park('Magical Kingdom', 100);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('raptor', 'carnivore', 30);
    dino3 = new Dinosaur('t-rex', 'herbivore', 10);
  });

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Magical Kingdom');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 100);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinos, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    assert.deepStrictEqual(park.collectionOfDinos, [dino1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino1);
    assert.deepStrictEqual(park.collectionOfDinos, [dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    assert.strictEqual(park.dinoThatAttractsMostVisitors(), dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.deepStrictEqual(park.dinosOfGivenSpecies('t-rex'), [dino1, dino3]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.strictEqual(park.visitorsPerDay(), 90);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.strictEqual(park.visitorsPerYear(), 32872.5);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.strictEqual(park.totalRevenuePerYear(), 3287250);
  });

  it('should be able to remove all dinos of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.removeDinosBySpecies('t-rex');
    assert.deepStrictEqual(park.collectionOfDinos, [dino2]);
  });

  it('should be able to provide an object of diet types and dinos with that diet', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.deepStrictEqual(park.dinoDiets(), {'carnivore':2, 'herbivore':1})
  });

});
