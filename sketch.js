var canvas;
var car_img,backgroundImage, road;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var gameState = 0;
var form, player, playerCount;
var allPlayers, car, fuels, obstacles;
//var cars = [];
var blastImg,playButton,playImg;

function preload() {
  backgroundImage = loadImage("../images/bg.png")
  car_img = loadImage("../images/car.png");
  track = loadImage("../images/road.png");
  fuelImage = loadImage("../images/fuel.png");
  obstacle1Image = loadImage("../images/obstacle1.png");
  obstacle2Image = loadImage("../images/obstacle2.png");
  lifeImage = loadImage("../images/life.png");
  blastImg = loadImage("../images/blast.png");
  playImg = loadImage("../images/play.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
 // game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
 // playButton = createSprite(windowWidth/2,windowHeight/4);
 // playButton.addImage(playImg);
 // playButton.scale = 1;
 // if (playerCount === 2) {
 //   game.update(1);
 // }

  if (gameState === 1) {
    game.play();

  }

//  if (gameState === 2) {
//    game.showLeaderboard();
//    game.end();
//  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}