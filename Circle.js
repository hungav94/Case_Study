function Circle(x, y, radius, speed, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.speedY = speedY;

    this.moveUp = function () {
        this.y -= this.speed;
    };

    this.moveDown = function () {
        this.y += this.speedY;
    };
    this.draw = function (canvas) {
        let context = canvas.getContext('2d');
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };
    this.isTouch = function (canvas) {
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY = -this.speedY;
        } else if (this.y >= canvas.height - 100) {
            this.y = canvas.height - 100;
        }
        return this.speedY;
    }
}