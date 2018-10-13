var engine = require("./engine.js");


engine.createMatrix();
setInterval(draw, 30);
var player = new Player();

function draw() {
    engine.drawBackground(); // This clears the background by rebuilding the matrix array. Alternatively you could set all the array elements to zero which might be more efficient;

    player.update();
    player.show();

    engine.renderMatrix(); // This renders the matrix to the console window. Only call this at the end of ths draw loop;
}

function Player() {
    this.x = 5;
    this.y = 5;
    this.dirX = 1;
    this.dirY = 0;

    this.show = function () {
        engine.drawPoint(this.x, this.y, engine.BOX);
    }

    this.update = function () {
        this.x += this.dirX;
        this.y += this.dirY;
    }
}