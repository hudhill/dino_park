const Park = require('./models/park.js');
const Dinosaur = require('./models/dinosaur.js');

let park;
let dino1;
let dino2;
let dino3;

park = new Park('Magical Kingdom', 100);
dino1 = new Dinosaur('t-rex', 'carnivore', 50);
dino2 = new Dinosaur('raptor', 'carnivore', 30);
dino3 = new Dinosaur('t-rex', 'herbivore', 10);

park.addDino(dino1);
park.addDino(dino2);
console.log(park.dinoThatAttractsMostVisitors());