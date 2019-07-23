let arrRect = [];

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let circle = new Circle(10, canvas.height - 100, 10, 50, 1);

let rect1 = new Rect(380, 400, 5, 20, 20);
let rect2 = new Rect(380, 300, 5, 20, 20);
let rect3 = new Rect(380, 200, 5, 20, 20);
let rect4 = new Rect(380, 100, 5, 20, 20);
let rect5 = new Rect(380, 0, 5, 20, 20);

let line1 = new Line(350, 480, 20, 1);
let line2 = new Line(300, 450, 20, 2);
let line3 = new Line(250, 450, 20, 3);

function ground() {
    context.moveTo(0, 510);
    context.lineTo(410, 510);
    context.stroke();
}

let count = 0;
let countJump = 1;

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            if (circle.canJump) {
                circle.moveUp();
                count++;
                if (count >= 2) {
                    circle.canJump = false;
                }
            } else {
                count = 0;
            }
            break;
        case 39:
            circle.moveRight();
            break;
        case 37:
            circle.moveLeft();
            break;
    }
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ground();
    //Line
    line1.drawLine(canvas);
    line2.drawLine(canvas);
    line3.drawLine(canvas);

    //Circle
    circle.moveDown();
    circle.drawCircle(canvas);
    circle.isTouchGround();
    circle.isTouchWall();
    circle.isTouchLine(line1);
    // countJump = 1;

    // switch (index) {
    //     case 1:
    //         circle.isTouchLine(line1);
    //         console.log(countJump);
    //         break;
    //     case 2:
    //         circle.isTouchLine(line2);
    //         console.log(countJump);
    //         break;
    //
    // }

    //Rect
    rect1.drawRect();
    rect1.moveLeftRect();
    console.log('xyRect ' + rect1.x + ' ' + rect1.y);
    console.log(rect1.speed);
    rect2.drawRect();
    rect2.moveLeftRect();
    rect3.drawRect();
    rect3.moveLeftRect();
    rect4.drawRect();
    rect4.moveLeftRect();
    rect5.drawRect();
    rect5.moveLeftRect();

    //Touch
    if (circle.isTouchRect(circle, rect1)) {
        circle.takeHit(30);
    }
    if (circle.isTouchRect(circle, rect2)) {
        circle.takeHit(30);
    }
    if (circle.isTouchRect(circle, rect3)) {
        circle.takeHit(30);
    }
    if (circle.isTouchRect(circle, rect4)) {
        circle.takeHit(30);
    }
    if (circle.isTouchRect(circle, rect5)) {
        circle.takeHit(30);
    }
    requestAnimationFrame(draw);

}

draw();
// setInterval(move,10);
document.addEventListener("keydown", moveSelection);