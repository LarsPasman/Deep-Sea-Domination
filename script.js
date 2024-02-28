
let animals = [];
let img;
let coins = 0;

var gameState = 0;

function preload() {
  img = loadImage('images/background.jpg');
  vis1 = loadImage('images/schelp.png');
}

function setup() {
  var cnv = createCanvas(windowWidth - 15,windowHeight -17);
  cnv.style('display', 'block');


  rectMode(CENTER);
 
  textAlign(CENTER);
  
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
  text("Deep Sea Domination", windowWidth/2, windowHeight/2);
  textSize(20);
  text("Press enter to start", width/2, height/2 + 50);

  if(keyIsDown(ENTER)){
    gameState = 1;
  }
}

function game(){
  background(img);
  
  for (let i = 0; i < 1; i++){
    if(frameCount % 150 == 0 && animals.length < 17){
    console.log("poep");
    animals.push(new Animal(vis1, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));
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
          mouseX >= animals[i].x - animals[i].width/2 &&
          mouseX <= animals[i].x + animals[i].width/2 &&
          mouseY >= animals[i].y - animals[i].height/2 &&
          mouseY <= animals[i].y + animals[i].height/2
        ) {
          animals[i].x = mouseX;
          animals[i].y = mouseY;
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

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}