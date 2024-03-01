class Animal {
constructor(img, x, y, width, height) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.width = width;
  this.height = height;
  this.level = 1;

}

 display() {
   imageMode(CENTER);
  image(this.img, this.x, this.y, this.width, this.height);
   if (frameCount % 60 == 0) {
     coins += coinRate[0];
   }
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