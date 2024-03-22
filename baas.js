class Boss {
    constructor(img, x, y, width, height, reward) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.width = width;
        this.height = height;
        this.reward = reward;
    }

    display() {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }
}