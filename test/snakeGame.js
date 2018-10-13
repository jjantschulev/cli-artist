var engine = require("../engine.js");

class Player {
    constructor() {
        this.x = 5;
        this.y = 5;
        this.dirX = 1;
        this.dirY = 0;
        this.tail = [{ x: 4, y: 5 }];
    }

    show() {
        engine.fillForeground('white');
        engine.drawPoint(this.x, this.y, engine.BOX);
        this.tail.forEach(point => {
            engine.drawPoint(point.x, point.y, engine.BOX);
        })
    }

    update() {
        for (let i = this.tail.length - 1; i >= 1; i--) {
            this.tail[i].x = this.tail[i - 1].x;
            this.tail[i].y = this.tail[i - 1].y;
        }
        this.tail[0].x = this.x;
        this.tail[0].y = this.y;

        this.x += this.dirX;
        this.y += this.dirY;

        if (this.x == food.x && this.y == food.y) {
            food = new Food();
            this.tail.push({ x: this.tail[this.tail.length - 1].x, y: this.tail[this.tail.length - 1].y })
        }
    }
}

class Food {

    constructor() {
        this.x = Math.floor(Math.random() * engine.width);
        this.y = Math.floor(Math.random() * engine.height);
    }

    show() {
        engine.fillForeground('red');
        engine.drawPoint(this.x, this.y, 'o');
    }

}

var player

var food;

function setup(e) {
    engine = e;
    player = new Player();
    food = new Food();
}

function draw() {
    player.update();
    player.show();
    food.show();
}

function keyPressed(key) {
    if (key == engine.UP) {
        player.dirX = 0;
        player.dirY = -1;
    }
    if (key == engine.DOWN) {
        player.dirX = 0;
        player.dirY = 1;
    }
    if (key == engine.LEFT) {
        player.dirX = -1;
        player.dirY = 0;
    }
    if (key == engine.RIGHT) {
        player.dirX = 1;
        player.dirY = 0;
    }
}

engine = engine(setup, draw, keyPressed, 10);