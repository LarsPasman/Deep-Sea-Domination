
let animals = [];
let coins = 0;
let coinsPerSecond = 0;

var gameState = 0;
let isDragging = false;

let button;
let shopButton;

//images
let img;
let img2;
let img3;
let garnaal;
let vis1;
let zeepaard;
let kogelvis;
let kwal;
let lampvis;
let haai;
let tonijn;
let button1;
let button2;
let button3;

function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/background2.webp');
  img3 = loadImage('images/background3.png')
  garnaal = loadImage('images/garnaal.png');
  vis1 = loadImage('images/vis 1.png');
  zeepaard = loadImage('images/zeepaard.png');
  kogelvis = loadImage('images/kogelvis.png');
  kwal = loadImage('images/kwal.png');
  lampvis = loadImage('images/lampvis.png')
  haai = loadImage('images/haai2.png');
  rog = loadImage('images/rog.png');
  dolfijn = loadImage('images/dolfijn.png');
  tonijn = loadImage('images/tonijn.png');
  coin = loadImage('images/coin.png');
  button1 = loadImage('images/button1.png');
  button2 = loadImage('images/button2.png');
  button3 = loadImage('images/button3.png');
  boink = loadSound('sounds/heehee.mp3');

//sounds

}

function setup() {

  var cnv = createCanvas(windowWidth - 15, windowHeight - 17);
  cnv.style('display', 'block');

  // Create the shop button
  shopButton = createButton('Shop');
  shopButton.position(10, 10);
  shopButton.mousePressed(openShop);

  rectMode(CENTER);
  imageMode(CORNER);
  textAlign(CENTER);
  
  background(img);

  }

function draw(){
  
  if (frameCount % 60 == 0) {
    coins += coinsPerSecond;
  }
  
  if (gameState == 0){
   welkom();
  }  
  if (gameState == 1){
   game();
  }
  if (gameState == 2){
   game2();
  }
  if (gameState == 3){
   game3();
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
  if(keyIsDown(50)){
    gameState = 2;
  }
  if(keyIsDown(51)){
    gameState = 3;
  }
}

function game(){
  imageMode(CORNER)
  background(img);

  //coin display op scherm
  textSize(40);
  textFont("Madimi One");
  fill(255);
  image(coin, windowWidth/2 - 90, 10, 60, 70)
  text(coins, windowWidth/2 - 10, 60); 
  image(coin, windowWidth/2 - 90, 60, 60, 70)
  text("/sec: " + coinsPerSecond, windowWidth/2 + 30, 108);

  //nieuwe dieren spawnen loop
  for (let i = 0; i < 1; i++){

    if(frameCount % 180 == 0 && animals.length < 10){
    animals.push(new Animal(garnaal, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));
  }
    
  //dieren laten zien
  for (let i = 0; i < animals.length; i++) {
    animals[i].display();
  }

  //button nieuw level
  button1 = createImg('images/button1.png', 'wereld1');
  button1.position(windowWidth - 100, 20);
  button1.size(100, 100);

    button1.mousePressed(() => {
      gameState = 1
    });
    
  button2 = createImg('images/button2.png', 'wereld1');
  button2.position(windowWidth - 100, 100);
  button2.size(100, 100);

  button2.mousePressed(() => {
    gameState = 2
  });

  button = createImg('images/button3.png', 'wereld1');
  button.position(windowWidth - 100, 180);
  button.size(100, 100);

  button.mousePressed(() => {
   gameState = 3
  });
 } 
}

function game2(){
  
imageMode(CORNER)
background(img2);

  textSize(20);
  textFont("Madimi One");
  fill(255);
  image(coin, windowWidth/2 - 60, 10, 60, 70)
  image(coin, windowWidth/2, 60, 70, 80)
  text(coins, windowWidth/2, 50);
  text("/seconde: " + coinsPerSecond, windowWidth/2, 60);
  
  for (let i = 0; i < 1; i++){

    if(frameCount % 50 == 0 && animals.length < 17){
    animals.push(new Animal(garnaal, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));

  }
  }
  if(keyIsDown(ENTER)){
    gameState = 1;
  }
  if(keyIsDown(51)){
    gameState = 3;

    Collision()
  }
 }

function game3(){
imageMode(CORNER)
background(img3);

  if(keyIsDown(ENTER)){
    gameState = 1;
  }
  if(keyIsDown(50)){
    gameState = 2;
  }
}


//de shop functions
function openShop() {
  background(0);
  
  // Add your shop logic here
  // This function will be called when the shop button is clicked

  closeButton = createButton('x');
  closeButton.position(width - 50, 10);
  closeButton.mousePressed(closeShop);
  buyButton = createButton('Buy');
  buyButton.position(width/2 - 50, height/2)
}

function closeShop() {
  // Close the shop and remove the close button
  gameState == 1; // Change the color back to the default background
  background(img);
  closeButton.remove();
  buyButton.remove();
}

function mouseDragged() {
  let prevMouseX = mouseX;
  let prevMouseY = mouseY;
  let draggedAnimal;
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
    draggedAnimal.x += (mouseX - draggedAnimal.x) / 2;
    draggedAnimal.y += (mouseY - draggedAnimal.y) / 2;
    Collision(draggedAnimal);
    // prevent default
    return false;
  }
  prevMouseX = mouseX;
  prevMouseY = mouseY;
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
          boink.play();
          animals.splice(j, 1);
          draggedAnimal.level++;
          AnimalLevels(draggedAnimal);
          break;
        }
      }
    }
  }
}



function AnimalLevels(draggedAnimal) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i] === draggedAnimal) {
      if (animals[i].level === 2) {
        animals[i].img = vis1;
        animals[i].width = 85;
        animals[i].height = 75;
        coinsPerSecond += 1;
      } else if (animals[i].level === 3) {
        animals[i].img = zeepaard;
        animals[i].width = 80;
        animals[i].height = 90;
        coinsPerSecond += 2;
      } else if (animals[i].level === 4) {
        animals[i].img = kogelvis;
        animals[i].width = 100;
        animals[i].height = 85;
        coinsPerSecond += 4;
      } else if (animals[i].level === 5) {
        animals[i].img = rog;
        animals[i].width = 90;
        animals[i].height = 100;
        coinsPerSecond += 8;
      } else if (animals[i].level === 6) {
        animals[i].img = tonijn;
        animals[i].width = 160;
        animals[i].height = 120;
        coinsPerSecond += 16;
      } else if (animals[i].level === 7) {
        animals[i].img = dolfijn;
        animals[i].width = 135;
        animals[i].height = 180;
        coinsPerSecond += 32;
      } else if (animals[i].level === 8) {
        animals[i].img = haai;
        animals[i].width = 200;
        animals[i].height = 200;
        coinsPerSecond += 64;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}
