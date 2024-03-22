class Boss {
    constructor(img, x, y, width, height, reward) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.width = width;
        this.height = height;
        this.reward = reward;
      this.dirX = 1;
      this.dirY = 1;
    }

  move() {
      this.x += this.dirX;
      this.y += this.dirY;

      if (this.x <= windowWidth/2 - 250 || this.x >= windowWidth/2 + 250) {
          this.dirX *= -1;
      }
      if (this.y <= windowHeight/2 - 100 || this.y >= windowHeight/2 + 90) {
          this.dirY *= -1;
      }
  }

    display() {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }

}