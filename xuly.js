let arrRect = [];

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let circle = new Circle(10, canvas.height - 100, 10, 50, 2);

let rect1 = new Rect(380, 400, 5, 20, 20);
let rect2 = new Rect(380, 300, 5, 20, 20);
let rect3 = new Rect(380, 200, 5, 20, 20);
let rect4 = new Rect(380, 100, 5, 20, 20);
let rect5 = new Rect(380, 0, 5, 20, 20);

let line1 = new Line(0, 510, 410);
let line2 = new Line(350, 480, 20);
let line3 = new Line(200, 300, 20);
// line1.drawLine(canvas);
// let line4 = new Line(0, canvas.height -100 +circle.radius, canvas.width + circle.radius);
// let line5 = new Line(0, canvas.height -100 +circle.radius, canvas.width + circle.radius);
// let line6 = new Line(0, canvas.height -100 +circle.radius, canvas.width + circle.radius);
// let line7 = new Line(0, canvas.height -100 +circle.radius, canvas.width + circle.radius);

// let rect;
// function createRect() {
//     let x = Math.floor(Math.random()*canvas.width);
//     let y = Math.floor(Math.random()*canvas.height + 50);
//     let speed = Math.floor(Math.random()*10 + 3);
//     let width = 20;
//     let height = 20;
//     rect = new Rect(x, y, speed, width, height);
//     rect.drawRect();
//     rect.moveLeftRect();
// }
//
// function mutipleRect() {
//     for (let i = 0; i < 5; i++) {
//         createRect();
//     }
// }

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            if (circle.canJump) {
                circle.moveUp();
                circle.canJump = false;
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

// let isGameOver = false;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Line
    line1.drawLine(canvas);
    line2.drawLine(canvas);
    line3.drawLine(canvas);

    //Circle
    circle.moveDown();
    circle.drawCircle(canvas);
    circle.isTouchLine(circle, line1);
    circle.isTouchWall();

    //Rect
    rect1.drawRect();
    rect1.moveLeftRect();
    // console.log('xyRect ' + rect1.x + ' ' + rect1.y);
    // console.log(rect1.speed);
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
document.addEventListener("keydown", moveSelection)