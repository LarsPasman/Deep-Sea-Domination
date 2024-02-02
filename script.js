let animals = [];
let img;

var gameState = 1;

function preload() {
  img = loadImage('images/background.jpg');
}

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
  //background(0)
  image(img, 0, 0, width, height);
  animal.display();
  animal.move();
}

//dieren kunnen bewegen
function mouseDragged() {
  if(mouseX >= animal.x && mouseX <= animal.x + animal.width && mouseY >= animal.y && mouseY){
  animal.x = mouseX - animal.width/2;
  animal.y = mouseY - animal.height/2;
  // prevent default
  }
  return false;
}