let animals = [];
let img;

var gameState = 1;

function preload() {
  img = loadImage('images/background.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (let i = 0; i <= 15; i++){
    console.log("poep");
    animals.push(new Animal(width/2, height/2, 50, 50));
  }
  }

function draw(){
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
  for (let i = 0; i < animals.length; i++) {
    animals[i].display();
  }
}

function mouseDragged() {
      for (let i = 0; i < animals.length; i++) {
        if (
          mouseX >= animals[i].x &&
          mouseX <= animals[i].x + animals[i].width &&
          mouseY >= animals[i].y &&
          mouseY <= animals[i].y + animals[i].height
        ) {
          animals[i].x = mouseX - animals[i].width / 2;
          animals[i].y = mouseY - animals[i].height / 2;
          // prevent default
          return false;
        }
      }
}