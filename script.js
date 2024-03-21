
let animals = [];
let coins = 200000;
let coinsPerSecond = 0;

var gameState = 0;
let isDragging = false;

let button;
let shopButton;

let level2 = false;

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
  boink = loadSound('sounds/boink.mp3');
  bubbles = loadImage('assets/bubbles.gif');



}

function setup() {
  var cnv = createCanvas(windowWidth - 15, windowHeight - 17);
  cnv.style('display', 'block');

  display();
  shopButton.hide();
  button1.hide();
  button2.hide();
  button3.hide();

  rectMode(CENTER);
  imageMode(CORNER);
  textAlign(CENTER);
  

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
  background(img);
  textFont("Madimi One");
  textSize(50);
  text("Deep Sea Domination", windowWidth/2, windowHeight/2);
  textSize(20);
  text("Press enter to start", width/2, height/2 + 50);
  

  if(keyIsDown(ENTER)){
    background(img);
    gameState = 1;
    
  }
  if(keyIsDown(50)){
    gameState = 2;
  }
  if(keyIsDown(51)){
    gameState = 3;
  }
}

///////////////////////////////////////////////////////////////////////////////////
function game(){
  shopButton.show();
  imageMode(CORNER)
  background(img);

   money();

      if(frameCount % 50 == 0 && animals.length < 17){
      animals.push(new Animal(garnaal, random(100 ,windowWidth - 100), random(100,windowHeight - 100), 75, 75));
      } 
      for (let i = 0; i < animals.length; i++) {
        let animal = animals[i];
        if (animal.x > 0 && animal.x < windowWidth && animal.y > 0 && animal.y < windowHeight) {
           animal.display();
        }
      }
 }


function game2(){
imageMode(CORNER)
background(img2);

  money();
  
 
    if(frameCount % 50 == 0 && animals.length < 17){
    animals.push(new Animal(haai, random(50,windowWidth - 50), random(50,windowHeight - 50), 75, 75));
    } 
    for (let k = 0; k < animals.length; k++) {
      let animal = animals[k];
      if (animal.x > 0 && animal.x < windowWidth && animal.y > 0 && animal.y < windowHeight) {
         //animal.display();
      }
    }
  }

function game3(){
imageMode(CORNER)
background(img3);

  money();
  
  //if(keyIsDown(ENTER)){
    //gameState = 1;
  //}
  //if(keyIsDown(50)){
    //gameState = 2;
  //}
}

function mouseDragged() {
  // let prevMouseX = mouseX;
  // let prevMouseY = mouseY;
  let draggedAnimal;

  //collision code
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
        animals[i].width = 65;
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
      else if (animals[i].level === 9) {
        animals[i].img = haai;
        animals[i].width = 200;
        animals[i].height = 200;
        coinsPerSecond += 64;
      }
    }
  }
}

function display(){
  //hier alles wat in de setup moet worden laten zien
  
  // Create the shop button
  shopButton = createButton('Shop');
  shopButton.position(20, 20);
  shopButton.mousePressed(openShop);
  shopButton.style('background-color', 'darkblue')
  
  

  //Alle wereld knoppen
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

  button3 = createImg('images/button3.png', 'wereld1');
  button3.position(windowWidth - 100, 180);
  button3.size(100, 100);
  button3.mousePressed(() => {
   gameState = 3
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//de shop functions
function openShop() {
  frameRate(0);
  shopButton.hide();

  closeButton = createButton('x');
  closeButton.position(width - 180, 150);
  closeButton.mousePressed(closeShop);
  
  // opmaak close knop
  closeButton.style('background-color', '#ff0000'); // Normal red color
  closeButton.style('color', 'white');
  closeButton.mouseOver(function() {
    closeButton.style('background-color', '#cc0000'); // Darker red on hover
  });
  closeButton.mouseOut(function() {
    closeButton.style('background-color', '#ff0000'); // Revert to normal red when not hovering
  });
  
  fill(255, 165, 0);
  rect(width/2, height/2, windowWidth - 200, windowHeight - 200 , 80);
  
  // Text to display options
  textSize(40);
  fill(255);


  //Level 2 button
  text("Level 2    =    10000" , 350, 230);
  image(coin , 517 , 178 , 75 , 75);
 
  buyLevel2Button = createButton('Buy Level 2');
  buyLevel2Button.position(630 , 190);
  
  buyLevel2Button.mousePressed(buyLevel2);
  
  
  buyLevel2Button.style('background-color', '#f8c471');
  buyLevel2Button.style('color', '#ffffff');

  //hover koop knop
    buyLevel2Button.mouseOver(function() {
      buyLevel2Button.style('background-color', '#e57373');
  });
    buyLevel2Button.mouseOut(function() {
      buyLevel2Button.style('background-color', '#f8c471');
      
  });

  
  //Level 3 button
  text("Level 3    =    100000" , 350, 350);
  image(coin , 517 , 248 , 75 , 75);

  buyLevel3Button = createButton('Buy Level 3');
  buyLevel3Button.position(630 , 300);

  buyLevel3Button.mousePressed(buyLevel3);


  buyLevel3Button.style('background-color', '#f8c471');
  buyLevel3Button.style('color', '#ffffff');

  //hover koop knop
    buyLevel3Button.mouseOver(function() {
      buyLevel3Button.style('background-color', '#e57373');
  });
    buyLevel3Button.mouseOut(function() {
      buyLevel3Button.style('background-color', '#f8c471');

  });
}

function closeShop() {
  frameRate(60);
  closeButton.remove();

  shopButton.show();
  buyLevel2Button.remove();
  buyLevel3Button.remove();
}

/////ALS JE LEVEL 2 KOOPT////////////
function buyLevel2(){
  if (coins >= 10000 && level2 == false) {
    coins -= 10000;
    level2 == true
    gameState == 2;
    button1.show();
    button2.show();
    buyLevel2Button.hide();
    closeShop();
  }
  if(coins < 10000) {
     fill(255, 0, 0);
     text("Niet genoeg coins", width/2, height/2)

    // Make "Niet genoeg coins" text disappear after 2 seconds
      setTimeout(function() {
        fill(255, 165, 0); // Set text color to background color to hide it
        text("Niet genoeg coins", width/2, height/2);
      }, 2000);
    }
}

/////ALS JE LEVEL 3 KOOPT////////////
function buyLevel3(){
  if (coins >= 100000) {
    coins -= 100000;
    button3.show();
    closeShop();
  }
  if(coins < 100000) {
     fill(255, 0, 0);
     text("Niet genoeg coins", width/2, height/2)

    // Make "Niet genoeg coins" text disappear after 2 seconds
      setTimeout(function() {
        fill(255, 165, 0); // Set text color to background color to hide it
        text("Niet genoeg coins", width/2, height/2);
      }, 2000);
    }
}

function money(){
  textSize(40);
  textFont("Madimi One");
  fill(255);
  image(coin, windowWidth/2 - 90, 10, 60, 70)
  text(coins, windowWidth/2 + 30, 60); 
  image(coin, windowWidth/2 - 90, 60, 60, 70)
  text("/sec: " + coinsPerSecond, windowWidth/2 + 30, 108);

}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}
