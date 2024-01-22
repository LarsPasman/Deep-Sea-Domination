let animals = [];

var gameState = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  animal = new Animal(width/2, height/2, 50, 50);
}


function draw() {
  if (gameState == 0){
   welkom();
  }  

  if (gameState == 1){
   game();
  }
}

function game(){
  background(0);
  
  animal.display();
  animal.move();
}

function mouseDragged() {
  animal.x = mouseX;
  animal.y = mouseY;
  // prevent default
  return false;
}