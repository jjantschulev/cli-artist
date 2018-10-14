var engine = require("../engine.js");

class Player {
    constructor() {
        this.x = 5;
        this.y = 5;
        this.dirX = 1;
        this.dirY = 0;
        this.tail = [{ x: 4, y: 5 }];
        this.dirs = [];
    }

    show() {
        engine.fillForeground('blue');
        engine.drawPoint(this.x, this.y, engine.BOX);
        engine.fillForeground('cyan');
        this.tail.forEach(point => {
            engine.drawPoint(point.x, point.y, engine.BOX);
        })
    }

    update() {
        if (this.dirs.length > 0) {
            this.dirX = this.dirs[0].x;
            this.dirY = this.dirs[0].y;
            this.dirs.splice(0, 1);
        }

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
            for (let i = 0; i < 5; i++) {
                this.tail.push({ x: this.tail[this.tail.length - 1].x, y: this.tail[this.tail.length - 1].y })
            }
        }

        for (let i = 0; i < this.tail.length; i++) {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                player = new Player();
            }
        }
        if (this.x <= 0 || this.x >= engine.width - 1 || this.y <= 0 || this.y >= engine.height - 1) {
            player = new Player;
        }
    }
}

class Food {

    constructor() {
        this.x = Math.floor(Math.random() * (engine.width - 2)) + 1;
        this.y = Math.floor(Math.random() * (engine.height - 2)) + 1;
    }

    show() {
        engine.fillForeground('red');
        engine.drawPoint(this.x, this.y, 'o');
    }

}

var player

var food;

function setup() {
    player = new Player();
    food = new Food();
}

function draw() {
    engine.fillBackground('yellow');
    engine.fillForeground('yellow');
    engine.drawBorder(engine.BOX);
    engine.fillForeground('green');
    engine.noBg();
    engine.drawText(2, 0, " Score: " + player.tail.length);
    player.update();
    player.show();
    food.show();
}

function keyPressed(key) {
    lastDirX = player.dirs.length > 0 ? player.dirs[0].x : player.dirX;
    lastDirY = player.dirs.length > 0 ? player.dirs[0].y : player.dirY;
    if (key == engine.UP && lastDirY == 0) {
        player.dirs.push({ x: 0, y: -1 });
    }
    if (key == engine.DOWN && lastDirY == 0) {
        player.dirs.push({ x: 0, y: 1 });
    }
    if (key == engine.LEFT && lastDirX == 0) {
        player.dirs.push({ x: -1, y: 0 });
    }
    if (key == engine.RIGHT && lastDirX == 0) {
        player.dirs.push({ x: 1, y: 0 });
    }
}

engine = engine(setup, draw, keyPressed, 10);