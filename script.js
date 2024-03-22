let boss;
let animals = [];
let sharks = [];
let coins = 1000000000;
let coinsPerSecond = 0;
let spawnTime = 120;

var gameState = 0;
let isDragging = false;
let  zeemeerWaarde = 10000;

let button;
let shopButton;
let settingsButton;

let boughtLevel2 = false;
let boughtLevel3 = false;
let boughtFaster = false;
let boughttrophy = false;

let level2 = false;

let timecount1 = 0;

//images

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
let plankton;
let garry;
let sandy;
let mrkrab;
let squidward;
let patrick;
let spongebob;

function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/background2.webp');
  img3 = loadImage('images/background3.png');

  //vissen level 1
  garnaal = loadImage('images/garnaal.png');
  vis1 = loadImage('images/vis 1.png');
  zeepaard = loadImage('images/zeepaard.png');
  kogelvis = loadImage('images/kogelvis.png');
  lampvis = loadImage('images/lampvis.png')
  haai = loadImage('images/haai2.png');
  rog = loadImage('images/rog.png');
  dolfijn = loadImage('images/dolfijn.png');
  tonijn = loadImage('images/tonijn.png');
  //schildpad = loadImage('images/schildpad.png');
  
  //vissen level 2
  kwal = loadImage('images/kwal.webp');
  plankton = loadImage('images/plankton.png');
  garry = loadImage('images/garry.png');
  sandy = loadImage('images/sandy.png');
  mrkrab = loadImage('images/mrkrab.png');
  squidward =  loadImage('images/squidward.png');
  patrick =  loadImage('images/patrick.png');
  spongebob =  loadImage('images/spongebob.png');
  
  //andere images en sounds
  settings = loadImage('images/settings.png');
  winpicture = loadImage('images/winpicture.jpg');
  coin = loadImage('images/coin.png');
  button1 = loadImage('images/button1.png');
  button2 = loadImage('images/button2.png');
  button3 = loadImage('images/button3.png');
  boink = loadSound('sounds/boink.mp3');
  levelup = loadSound('sounds/levelup.mp3');
  bubbles = loadImage('assets/bubbles.gif');
  zeemeermin = loadImage('images/zeemeermin.png');
  bubbleSound = loadSound('sounds/Bubbel.mp3');
  muziek = loadSound('sounds/muziek.mp3');
  heehee = loadSound('sounds/heehee.mp3');
  trophy = loadImage('images/trophy.png')
  winmusic = loadSound('sounds/winmusic.mp3')
  shopIcon = loadImage('images/shopIcon.png')
  soundIcon = loadImage('images/volumeIcon.png')


}

function setup() {
  var cnv = createCanvas(windowWidth - 15, windowHeight - 17);
  cnv.style('display', 'block');
  muziek.play();
  
  slider = createSlider(0, 1, 0.5, 0.25);
  display();
  shopButton.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  settingsButton.hide();
  slider.hide();

  rectMode(CENTER);
  imageMode(CORNER);
  textAlign(CENTER);
  

  }

function draw(){

  muziek.setVolume(slider.value())
  
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
  if (gameState == 4){
   win();
  }

 
}

function welkom(){

  timecount1 = 0
    if(frameCount % 1 == 0){
      timecount1 += 1
    } 
  if(timecount1 == 10){
      winmusic.play();
    }
  
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
}

///////////////////////////////////////////////////////////////////////////////////
function game(){
  shopButton.show();
  settingsButton.show();
  imageMode(CORNER)
  background(img);

   money();

      if(frameCount % spawnTime == 0 && animals.length < 17){
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
  
 
    if(frameCount % 100 == 0 && sharks.length < 17){
    sharks.push(new Shark(plankton, random(50,windowWidth - 50), random(50,windowHeight - 50), 110, 110));
    } 
    for (let k = 0; k < sharks.length; k++) {
      let shark = sharks[k];
      if (shark.x > 0 && shark.x < windowWidth && shark.y > 0 && shark.y < windowHeight) {
         shark.display();
      }
    }
  }

function game3(){
imageMode(CORNER)
background(img3);

  money();


    // Create and display the boss
  if(!boss){
    boss = new Boss(zeemeermin, windowWidth / 2, windowHeight / 2, 800, 800);
    }
    boss.display();
    zeemeermin.play();
    boss.move();
  }

function win(){

  timecount1 = 0
  if(frameCount % 1 == 0){
    timecount1 += 1
  } 
if(timecount1 == 10){
    winmusic.play();
  }
  imageMode(CORNER)
  
  background(img);
  image(trophy, windowWidth/2 - 250, windowHeight/2 - 250, 500, 500)
  muziek.stop();
  shopButton.hide()
  button1.hide();
  button2.hide();
  button3.hide();
  settingsButton.hide();

  textFont("Madimi One");
  textSize(50);
  text("Gefeliciteerd je hebt gewonnen!", windowWidth/2, windowHeight/2);
  textSize(20);
}
 
function mouseClicked(){
  if(gameState == 3){
    coins += zeemeerWaarde
    bubbleSound.play();
  }
}

function mouseDragged() {
  // let prevMouseX = mouseX;
  // let prevMouseY = mouseY;
  let draggedAnimal;

  //collision code
  if(gameState == 1){
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
  }

   if(gameState == 2){
  for (let k = 0; k < sharks.length; k++) {
    if (
      mouseX >= sharks[k].x - sharks[k].width/2 &&
      mouseX <= sharks[k].x + sharks[k].width/2 &&
      mouseY >= sharks[k].y - sharks[k].height/2 &&
      mouseY <= sharks[k].y + sharks[k].height/2
    ) {
      draggedAnimal = sharks[k];
       isDragging = true;

      break;
    }
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
///////COLLISION VOOR SHARKS///////////
  for (let k = 0; k < sharks.length; k++) {
    if (
      mouseX >= sharks[k].x - sharks[k].width/2 &&
      mouseX <= sharks[k].x + sharks[k].width/2 &&
      mouseY >= sharks[k].y - sharks[k].height/2 &&
      mouseY <= sharks[k].y + sharks[k].height/2
    ) {
      draggedAnimal = sharks[k];
      break;
    }
  }
  if (draggedAnimal) {
    for (let l = 0; l < sharks.length; l++) {
      if (l !== sharks.indexOf(draggedAnimal) && draggedAnimal.level === sharks[l].level) {
        if (
          draggedAnimal.x < sharks[l].x + sharks[l].width &&
          draggedAnimal.x + draggedAnimal.width > sharks[l].x &&
          draggedAnimal.y < sharks[l].y + sharks[l].height &&
          draggedAnimal.y + draggedAnimal.height > sharks[l].y
        ) {
          boink.play();
          sharks.splice(l, 1);
          draggedAnimal.level++;
          SharkLevels(draggedAnimal);
          break;
        }
      }
    }
  }
  
}


///////animallevels voor de eerste wereld
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
        animals[i].width = 110;
        animals[i].height = 130;
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

//// de levels voor het 2e level
function SharkLevels(draggedAnimal) {
  for (let k = 0; k < sharks.length; k++) {
    if (sharks[k] === draggedAnimal) {
      if (sharks[k].level === 2) {
        sharks[k].img = kwal;
        sharks[k].width = 70;
        sharks[k].height = 60;
        coinsPerSecond += 64;
      } else if (sharks[k].level === 3) {
        sharks[k].img = garry;
        sharks[k].width = 120;
        sharks[k].height = 110;
        coinsPerSecond += 128;
      } else if (sharks[k].level === 4) {
        sharks[k].img = sandy;
        sharks[k].width = 180;
        sharks[k].height = 140;
        coinsPerSecond += 256;
      } else if (sharks[k].level === 5) {
        sharks[k].img = mrkrab;
        sharks[k].width = 180;
        sharks[k].height = 199;
        coinsPerSecond += 512;
      } else if (sharks[k].level === 6) {
        sharks[k].img = squidward;
        sharks[k].width = 250;
        sharks[k].height = 180;
        coinsPerSecond += 1024;
      } else if (sharks[k].level === 7) {
        sharks[k].img = patrick;
        sharks[k].width = 230;
        sharks[k].height = 200;
        coinsPerSecond += 2048;
      } else if (sharks[k].level === 8) {
        sharks[k].img = spongebob;
        sharks[k].width = 290;
        sharks[k].height = 290;
        coinsPerSecond += 4096;
      }
    }
  }
}

function display(){
  //hier alles wat in de setup moet worden laten zien
  settingsButton = createImg('images/settings.png', 'settings')
  settingsButton.position(270, 30)
  settingsButton.size(80, 80);
  settingsButton.mousePressed(openSettings);
  
  
  // Create the shop button
  textSize(40)
  shopButton = createImg('images/shopIcon.png', 'shop');
  shopButton.size(100, 100);
  shopButton.position(100, 20);
  shopButton.mousePressed(openShop);

  
  
  

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
  settingsButton.hide();
  
  
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

  fill(255);

 // faster animal production button
  if(gameState == 1){
  textSize(40);
  text("Spawn rate  =   2.000", 340, 520);
  image(coin , 550 , 505 , 75 , 75);

   textSize(60)
   text("Shop", windowWidth/2, windowHeight/2 - 300);
    
buyFasterButton = createButton('Buy Faster');
  buyFasterButton.position(630 , 490);
  buyFasterButton.mousePressed(buyFaster);


  buyFasterButton.style('background-color', '#f8c471');
  buyFasterButton.style('color', '#ffffff');

  //hover koop knop
    buyFasterButton.mouseOver(function() {
      buyFasterButton.style('background-color', '#e57373');
  });
    buyFasterButton.mouseOut(function() {
      buyFasterButton.style('background-color', '#f8c471');

  });
  }

  if(gameState == 3){
    textSize(40);
    text("MONEY!  =   1.000.000", 345, 530);
    image(coin , 570 , 515 , 75 , 75);
    
     textSize(60)
     text("Shop", windowWidth/2, windowHeight/2 - 300);

  buyFasterButton = createButton('Buy Upgrade');
    buyFasterButton.position(630 , 490);
    buyFasterButton.mousePressed(buyUpgrade);


    buyFasterButton.style('background-color', '#f8c471');
    buyFasterButton.style('color', '#ffffff');

    //hover koop knop
      buyFasterButton.mouseOver(function() {
        buyFasterButton.style('background-color', '#e57373');
    });
      buyFasterButton.mouseOut(function() {
        buyFasterButton.style('background-color', '#f8c471');

    });
    }
  
    textSize(40);
  //Level 2 button
  text("Level 2    =    10.000" , 340, 290);

  if(gameState > 0){
  image(coin , 530 , 275 , 75 , 75);
  }

 

  
  buyLevel2Button = createButton('Buy Level 2');
  buyLevel2Button.position(630 , 250);
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
  text("Level 3    =    500.000" , 350, 410);
  
    image(coin , 555 , 395 , 75 , 75);

  buyLevel3Button = createButton('Buy Level 3');
  buyLevel3Button.position(630 , 370);

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

  //trophy button
  textSize(40);
  //Level 2 button
  text("Trophy   =   100.000.000" , 350, 645);

  image(coin , 580 , 630 , 75 , 75);
  



  buytrophyButton = createButton('Buy Trophy');
  buytrophyButton.position(630 , 610);
  buytrophyButton.mousePressed(buyTrophy);


  buytrophyButton.style('background-color', '#f8c471');
  buytrophyButton.style('color', '#ffffff');

  //hover koop knop
    buytrophyButton.mouseOver(function() {
      buytrophyButton.style('background-color', '#e57373');
  });
    buytrophyButton.mouseOut(function() {
      buytrophyButton.style('background-color', '#f8c471');

  });
}

function closeShop() {
  frameRate(60);
  closeButton.remove();

  shopButton.show();
  settingsButton.show();
  buyLevel2Button.remove();
  buyLevel3Button.remove();
  buyFasterButton.remove();
  buytrophyButton.remove();
}

/////ALS JE LEVEL 2 KOOPT////////////
function buyLevel2(){
  if (!boughtLevel2 && coins >= 10000) {
    levelup.play();
    coins -= 10000;

    gameState == 2;
    button1.show();
    button2.show();
    boughtLevel2 = true;
    closeShop();
  }
  if(!boughtLevel2 && coins < 10000) {
    displayNotEnoughCoinsText();
    } else if (boughtLevel2) {
    // Display "Level 2 is already bought" text
    displayAlreadyBoughtText();
  }
}

/////ALS JE LEVEL 3 KOOPT////////////
function buyLevel3(){
  if (!boughtLevel3 && coins >= 500000) {
    levelup.play();
    coins -= 500000;

    gameState == 3;
    button1.show();
    button3.show();
    boughtLevel3 = true;
    closeShop();
  }
  if(!boughtLevel3 && coins < 500000) {
    displayNotEnoughCoinsText();
    } else if (boughtLevel3) {
    // Display "Level 2 is already bought" text
    displayAlreadyBoughtText();
  }
}

//////////ALS JE DE FASTER KOOPT////////////
function buyFaster() {
  if (!boughtFaster && coins >= 2000) {
    levelup.play();
    coins -= 2000;
    spawnTime = 80;
    boughtFaster = true;
    closeShop();
  }
  if (!boughtFaster && coins < 2000) {
    // Display "Niet genoeg coins" text
    displayNotEnoughCoinsText();
  }else if (boughtFaster) {
    // Display "Level 2 is already bought" text
    displayAlreadyBoughtText();
  }
}

//////////Als JE TROPHY KOOPT////////////
function buyTrophy(){
  if (!boughttrophy && coins >= 100000000) {
    coins -= 100000000;
    closeShop();
    gameState = 4;
  }
  if (!boughttrophy && coins < 100000000) {
    // Display "Niet genoeg coins" text
    displayNotEnoughCoinsText();
  }else if (boughttrophy) {
    // Display "De schat is al binnen" text
    displayAlreadyBoughtText();
  }
}

function buyUpgrade(){
  if (!boughtFaster && coins >= 1000000) {
      levelup.play();
      coins -= 1000000;
      boughtFaster = true;
      closeShop();
      zeemeerWaarde = 100000;
    }
    if (!boughtFaster && coins < 1000000) {
      // Display "Niet genoeg coins" text
      displayNotEnoughCoinsText();
    }else if (boughtFaster) {
      // Display "Level 2 is already bought" text
      displayAlreadyBoughtText();
    }
  }

function money(){
  textSize(40);
  textFont("Madimi One");
  fill(255);
  if(coins < 100000){
  image(coin, windowWidth/2 - 90, 10, 60, 70)
  image(coin, windowWidth/2 - 90, 60, 60, 70)
} else if(coins >= 100000){
  image(coin, windowWidth/2 - 120, 10, 60, 70)
  image(coin, windowWidth/2 - 100, 60, 60, 70)
}
  text(coins, windowWidth/2 + 30, 60); 
  text("/sec: " + coinsPerSecond, windowWidth/2 + 30, 108);

}

function displayNotEnoughCoinsText(){
   fill(255, 0, 0);
   text("Niet genoeg coins", width/2, height/2 - 10)

  // Make "Niet genoeg coins" text disappear after 2 seconds
    setTimeout(function() {
      fill(255, 165, 0); // Set text color to background color to hide it
      text("Niet genoeg coins", width/2, height/2 - 10);
    }, 2000);
}

function displayAlreadyBoughtText(){
  fill(255, 0, 0);
   text("Je hebt dit al gekocht", width/2, height/2 - 10)

  // Make "Niet genoeg coins" text disappear after 2 seconds
    setTimeout(function() {
      fill(255, 165, 0); // Set text color to background color to hide it
      text("Je hebt dit al gekocht", width/2, height/2 - 10);
    }, 2000);
  
}

function openSettings(){
  frameRate(0);
  settingsButton.hide();
  shopButton.hide();
  
  textSize(40)
  text("Menu", windowWidth/2, windowHeight/2 );
  closeButton = createButton('Apply');
  closeButton.position(width - 210, 150);
  closeButton.mousePressed(closeSettings);

  // opmaak close knop
  closeButton.style('background-color', '#ff0000'); // Normal red color
  closeButton.style('color', 'white');
  closeButton.mouseOver(function() {
    closeButton.style('background-color', '#cc0000'); // Darker red on hover
  });
  closeButton.mouseOut(function() {
    closeButton.style('background-color', '#ff0000'); // Revert to normal red when not hovering
  });
  closeButton.show();
  fill(255, 165, 0);
  rect(width/2, height/2, windowWidth - 200, windowHeight - 200 , 80);

  // Text to display options

  slider.show();
  slider.position(windowWidth/2 - 200, windowHeight/2 + 250)
  slider.style('width', '400px');
  image(soundIcon, windowWidth/2 - 410, windowHeight/2 + 210, 80, 80)
  
  fill(255);

  if(gameState == 1);
  textSize(60)
   text("Instellingen", windowWidth/2, windowHeight/2 - 300);

  


}

function closeSettings(){
  frameRate(60);
  closeButton.hide();
  shopButton.show();
  slider.hide();
  settingsButton.show();
}

function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight-17);
}
