var engine = require("../engine.js");

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

var player
function setup () {
    player = new Player();
}

function draw () {
    engine.clear(); // This clears the background by rebuilding the matrix array. Alternatively you could set all the array elements to zero which might be more efficient;

    player.update();
    player.show();
}

engine = engine(setup, draw);