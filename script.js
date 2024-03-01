
let animals = [];
let coins = 0;
let coinRate = [1, 2, 4, 8, 16, 32, 64, 128, 248, 456, 912, 1824, 3648, 7296, 14592, 28912,];
let totalCoins = 0;
let coinsPerSecond = 0;

var gameState = 0;
let isDragging = false;

//images
let img;
let img2;
let garnaal;
let vis1;
let zeepaard;
let kogelvis;
let slang;
let kwal;
let lampvis;
let haai;
let tonijn;

function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/background2.webp');
  garnaal = loadImage('images/garnaal.png');
  vis1 = loadImage('images/vis 1.png');
  zeepaard = loadImage('images/zeepaard.png');
  kogelvis = loadImage('images/kogelvis.png');
  slang = loadImage('images/slang.png');
  kwal = loadImage('images/kwal.png');
  lampvis = loadImage('images/lampvis.png')
  haai = loadImage('images/haai2.png');
  rog = loadImage('images/rog.png');
  dolfijn = loadImage('images/dolfijn.png');
  tonijn = loadImage('images/tonijn.png');
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
  if (gameState == 2){
   game2();
  }
  textSize(20);
  fill(255);
  text("Total Coins: " + totalCoins, 20, 30);
  text("Coins Per Second: " + coinsPerSecond, 20, 60);
}

function welkom(){

  textSize(50);
  text("Deep Sea Domination", windowWidth/2, windowHeight/2);
  textSize(20);
  text("Press enter to start", width/2, height/2 + 50);

  if(keyIsDown(ENTER)){
    gameState = 1;
  }
  if(keyIsDown(32)){
    gameState = 2;
  }
}

function game(){
  imageMode(CORNER)
  background(img);
  
  for (let i = 0; i < 1; i++){
    if(frameCount % 50 == 0 && animals.length < 17){
    animals.push(new Animal(garnaal, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));
    }
  }
  //image(img, 0, 0, width, height);
  for (let i = 0; i < animals.length; i++) {
    animals[i].display();
  }
  
  if (frameCount % 60 == 0) {
    totalCoins += coinsPerSecond;
  }
  
  console.log(coins);
} 

function game2(){
imageMode(CORNER)
background(img2);
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
       isDragging = true;

      break;
    }
  }
  if (draggedAnimal) {
    draggedAnimal.x = mouseX;
    draggedAnimal.y = mouseY
    Collision(draggedAnimal);
    // prevent default
    return false;
  }
}

function mouseReleased() {
  if (isDragging) {
    isDragging = false;
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

function Money(){
  if (animals[i].level == 1 && frameCount % 60 == 0){
    coinsPerSecond = coinsPerSecond + 1
  }

}


function AnimalLevels(){
  for (let i = 0; i < animals.length; i++) {
  if (animals[i].level === 2) {
    animals[i].img = vis1;
    animals[i].width = 85;
    animals[i].height = 75;
    if (frameCount % 60 == 0) {
    coinsPerSecond = coinsPerSecond + coinRate[1];
    }

  }
  if (animals[i].level === 3) {
    animals[i].img = zeepaard;
    animals[i].width = 80;
    animals[i].height = 90;
  if (frameCount % 60 == 0) {
      coins += coinRate[4];
    }
  }
  if (animals[i].level === 4) {
    animals[i].img = kogelvis;
    animals[i].width = 100;
    animals[i].height = 85;
  if (frameCount % 60 == 0) {
      coins += coinRate[8];
    }
   
  }
  if (animals[i].level === 5) {
    animals[i].img = rog;
    animals[i].width = 90;
    animals[i].height = 100;
  if (frameCount % 60 == 0) {
      coins += coinRate[16];
    }
  }
  if (animals[i].level === 6) {
    animals[i].img = tonijn;
    animals[i].width = 160;
    animals[i].height = 120;
    if (frameCount % 60 == 0) {
      coins += coinRate[32];
    }
  }
    if (animals[i].level === 7) {
      animals[i].img = dolfijn;
      animals[i].width = 135;
      animals[i].height = 180;
      coins += coinRate[64];
  }
  if (animals[i].level === 8) {
    animals[i].img = haai;
    animals[i].width = 200;
    animals[i].height = 200;
    coins += coinRate[128];
  }
 }
}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}

