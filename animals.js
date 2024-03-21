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
   this.x = constrain(this.x, this.width, windowWidth - this.width);
   this.y = constrain(this.y, this.height, windowHeight - this.height);
  image(this.img, this.x, this.y, this.width, this.height);
   
 }
}