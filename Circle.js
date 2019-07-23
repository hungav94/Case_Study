function Circle(x, y, radius, speed, speedDown) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.speedDown = speedDown;
    this.canJump = true;
    this.isMoveDown = true;

    this.moveUp = function () {
        this.y -= this.speed;
    };

    this.moveDown = function () {
        if (this.isMoveDown) {
            this.y += this.speedDown;
        }
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
    this.isTouchGround = function () {
        if (this.y >= canvas.height - 100) {
            this.y = canvas.height - 100 - this.speedDown;
            this.canJump = true;
        }
    };
    this.isTouchLine = function (Line) {
        if (this.y + this.radius == Line.y) {
            if (this.x + this.radius > Line.x && this.x - this.radius < Line.x + Line.width) {
                this.y = Line.y - this.radius;
                this.isMoveDown = false;
                this.canJump = true;
            } else {
                this.isMoveDown = true;
            }
        } else {
            this.isMoveDown = true;
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