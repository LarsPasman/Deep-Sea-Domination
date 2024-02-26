
let animals = [];
let img;
let coins = 0;

var gameState = 0;

function preload() {
  img = loadImage('images/background.jpg');
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(255);

  }

function draw(){
  if (gameState == 0){
   welkom();
  }  

  if (gameState == 1){
   game();
  }
}

function welkom(){
  background(img);
  textSize(50);
  text("Deap Sea Domination", width/2, height/2);
  textSize(20);
  text("Press enter to start", width/2, height/2 + 50);

  if(keyIsDown(ENTER)){
    gameState = 1;
  }
}

function game(){
  background(img);
  
  for (let i = 0; i < 1; i++){
    if(frameCount % 300 == 0){
    console.log("poep");
    animals.push(new Animal());
    }
  }
  //image(img, 0, 0, width, height);
  for (let i = 0; i < animals.length; i++) {
    animals[i].display();
    animals[i].collision()
    Collision(animals[i])
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

function Collision(){
  for (let i = 0; i < animals.length; i++){
    if (
      animals[i].x >= animals[i].x &&
      animals[i].x <= animals[i].x + animals[i].width &&
      animals[i].y >= animals[i].y &&
      animals[i].y <= animals[i].y + animals[i].height
    ){
    }
  }
}
