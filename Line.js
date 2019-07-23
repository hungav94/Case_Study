function Line(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.drawLine = function (canvas) {
        let context = canvas.getContext('2d');
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + this.width, this.y);
        context.fillStyle = 'black';
        context.stroke();
    };
}