function Rect(x, y, speed, width, height) {
    this.x = x;
    this.y = y;
    this.speed = Math.round(Math.random()*speed + 10);
    this.width = width;
    this.height = height;
    this.getX = function () {
        return this.x;
    };
    this.moveLeftRect = function () {
        if (this.x < 0) {
            this.x = canvas.width;
        }
        this.x -= this.speed;
    };
    this.drawRect = function () {
        context.beginPath();
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    };
}