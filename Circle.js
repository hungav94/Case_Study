function Circle(x, y, radius, speed, speedXY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.speedXY = speedXY;
    this.canJump = true;

    this.moveUp = function () {
        this.y -= this.speed;
    };

    this.moveDown = function () {
        this.y += this.speedXY;
    };
    this.moveLeft = function () {
        this.x -= 10;
    };
    this.moveRight = function () {
        this.x += 10;
    };
    this.drawCircle = function (canvas) {
        let context = canvas.getContext('2d');
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };
    this.isTouchLine = function (Circle, Line) {
        let bottomCircle = Circle.y + Circle.radius;
        let topline = Line.y;
        if (bottomCircle >= topline) {
            Circle.y = topline - Circle.radius - this.speedXY;
            this.canJump = true;
        }
    };
    this.isTouchWall = function () {
        if (this.x <= 0) {
            this.x = 0 + this.radius;
        } else if (this.x >= canvas.width) {
            this.x = canvas.width - this.radius;
        }
    };
    this.isTouchRect = function (Circle, Rect) {
        let rightCircle = Circle.x;
        let leftCircle = Circle.x - Circle.radius;
        let bottomCircle = Circle.y + Circle.radius;
        let topCircle = Circle.y - Circle.radius;
        let rightRect = Rect.x + Rect.width;
        let leftRect = Rect.x;
        let bottomRect = Rect.y + Rect.height;
        let topRect = Rect.y;
        if (rightCircle < leftRect || bottomCircle < topRect || leftCircle > rightRect || topCircle > bottomRect) {
            return false;
        } else {
            return true;
        }
    };
    this.takeHit = function (dmg) {
        this.x -= dmg;
    };
}