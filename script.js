
let animals = [];
let coins = 0;

var gameState = 0;

//images
let img;
let vis1;
let walvis;
let haai;

function preload() {
  img = loadImage('images/background.jpg');
  vis1 = loadImage('images/vis 1.png');
  walvis = loadImage('images/slang.png');
  haai = loadImage('images/lampvis.png');
}

function setup() {

  var cnv = createCanvas(windowWidth - 15, windowHeight - 17);
  cnv.style('display', 'block');



  rectMode(CENTER);
  imageMode(CORNER);
  textAlign(CENTER);
  
  background(img);

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

  textSize(50);
  text("Deep Sea Domination", windowWidth/2, windowHeight/2);
  textSize(20);
  text("Press enter to start", width/2, height/2 + 50);

  if(keyIsDown(ENTER)){
    gameState = 1;
  }
}

function game(){
  imageMode(CORNER)
  background(img);
  
  for (let i = 0; i < 1; i++){
    if(frameCount % 50 == 0 && animals.length < 17){
    animals.push(new Animal(vis1, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));
    }
  }
  //image(img, 0, 0, width, height);
  for (let i = 0; i < animals.length; i++) {
    animals[i].display();
  }
}

function mouseDragged() {
  let draggedAnimal = null;
  for (let i = 0; i < animals.length; i++) {
    if (
      mouseX >= animals[i].x - animals[i].width/2 &&
      mouseX <= animals[i].x + animals[i].width/2 &&
      mouseY >= animals[i].y - animals[i].height/2 &&
      mouseY <= animals[i].y + animals[i].height/2
    ) {
      draggedAnimal = animals[i];

      break;
    }
  }
  if (draggedAnimal) {
    draggedAnimal.x = mouseX;
    draggedAnimal.y = mouseY;

    Collision();
    // prevent default
    return false;
  }
}

function Collision() {
   let draggedAnimal = null;
  for (let i = 0; i < animals.length; i++) {
    if (
      mouseX >= animals[i].x - animals[i].width/2 &&
      mouseX <= animals[i].x + animals[i].width/2 &&
      mouseY >= animals[i].y - animals[i].height/2 &&
      mouseY <= animals[i].y + animals[i].height/2
    ) {
      draggedAnimal = animals[i];
      break;
    }
}
  if (draggedAnimal) {
    for (let j = 0; j < animals.length; j++) {
      if (j !== animals.indexOf(draggedAnimal) && draggedAnimal.level === animals[j].level) {
        if (
          draggedAnimal.x < animals[j].x + animals[j].width &&
          draggedAnimal.x + draggedAnimal.width > animals[j].x &&
          draggedAnimal.y < animals[j].y + animals[j].height &&
          draggedAnimal.y + draggedAnimal.height > animals[j].y
        ) {
          console.log("Collision detected!");
          animals.splice(j, 1);
          draggedAnimal.level++;
          console.log(draggedAnimal.level);
          AnimalLevels();
          break;
        }
      }
    }
  }
}

function AnimalLevels(){
  for (let i = 0; i < animals.length; i++) {
  if (animals[i].level === 2) {
    animals[i].img = walvis;
    animals[i].width = 100;
    animals[i].height = 70;
  }
  if (animals[i].level === 3) {
    animals[i].img = haai;
  }
  if (animals[i].level === 4) {
    animals[i].img = haai;
  }
  if (animals[i].level === 5) {
    animals[i].img = haai;
  }
 }
}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}