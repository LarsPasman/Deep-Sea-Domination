class Animal {
constructor() {
  this.x = random(50,900);
  this.y = random(0,700);
  this.width = 50;
  this.height = 50;
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
  }

 }
}