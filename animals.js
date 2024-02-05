class Animal {
constructor() {
  this.x = windowWidth/2;
  this.y = windowHeight/2;
  this.width = 50;
  this.height = 70;
  this.level = 1;
}


 display() {
  rect(this.x, this.y, this.width, this.height);

 }

collision(){
  if (
    mouseX >= this.x &&
    mouseX <= this.x + this.width &&
    mouseY >= this.y &&
    mouseY <= this.y + this.height
  ) {
    return true;
  } else {
    return false;
  }

 }
}