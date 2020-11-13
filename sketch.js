var background;
var ball;
var insiders;
var outsiders;
var playerA,playerB,playerC,playerD,playerE,playerF,playerG;
var gameState;
var playerCount;

function preload(){
background = loadImage("/images/background.jpg");
ball = loadImage("/images/ball.png");
insiders = loadImage("/images/insiders.png");
outsiders = loadImage("/images/outsiders.png");  
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  