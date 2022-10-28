var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
 
}

function setup() {
  canvas = createCanvas(1600,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("gray");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}


