function Circle(x, y, radius, speed, speedXY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.speedXY = speedXY;

    this.moveUp = function () {
        this.y -= this.speed;
    };

    this.moveDown = function () {
        this.y += this.speedXY;
    };
    // this.moveLeft = function () {
    //     this.x -= this.speedXY;
    // };
    // this.moveRight = function () {
    //     this.x += this.speedXY;
    // };
    this.draw = function (canvas) {
        let context = canvas.getContext('2d');
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };
    this.isTouch = function (canvas) {
        if (this.y >= canvas.height - 100) {
            this.y = canvas.height - 100;
        }
        return this.speedXY;
    }
}