let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let circle = new Circle(10, canvas.height - 100, 10, 50, 2);

function line() {
    context.moveTo(0, canvas.height - 100 + circle.radius);
    context.lineTo(canvas.width + circle.radius, canvas.height - 100 + circle.radius);
    context.stroke();
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            circle.moveUp();
            break;
        // case 39:
        //     circle.moveRight();
        //     break;
        // case 37:
        //     circle.moveLeft();
        //     break;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.moveDown();
    circle.draw(canvas);
    circle.isTouch(canvas);
    console.log(circle.y);
    line();

    requestAnimationFrame(draw);
}
draw();
// setInterval(move,10);
document.addEventListener("keydown", moveSelection)