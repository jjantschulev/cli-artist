var engine = require("../engine.js");

function Player() {
    this.x = 5;
    this.y = 5;
    this.incY = 5;
    this.dirX = 1;
    this.dirY = 0;

    this.length = 2;

    this.pastLocations = []

    this.show = function () {
        engine.fillBackground("green");
        engine.fillForeground("green");
        engine.drawPoint(this.x, this.y, engine.BOX);
        
        engine.fillBackground("blue");
        engine.fillForeground("blue");
        for (let i = 0; i <= this.length; i++) {
            let loc = this.pastLocations[this.pastLocations.length - (i + 1)] || {x: this.x, y: this.y};
            engine.drawPoint(loc.x, loc.y, engine.BOX);
        }
        
        engine.noBg();
        engine.drawText(2, 1, String(this.length));
    }

    this.update = function () {
        this.x += this.dirX;
        this.incY += this.dirY * 0.4;
        this.y = Math.floor(this.incY);
        
        this.x = engine.constrain(this.x, 0, engine.width - 2)
        this.y = engine.constrain(this.y, 0, engine.height - 2)
        
        this.pastLocations.push({x: Math.floor(this.x), y: Math.floor(this.y)})
                
        for (let i = this.pastLocations.length - 5; i > this.pastLocations.length - this.length; i--) {
            let loc = this.pastLocations[i];
            if (loc.x == this.x && loc.y == this.y) this.length = 2;
        }

    }

    this.grow = function () {
        this.length = Number(this.length) + 5;
    }
}

function Food () {
    this.x = 10;
    this.y = 10;

    this.resetPos = function () {
        this.x = Math.floor(Math.random() * process.stdout.columns);
        this.y = Math.floor(Math.random() * process.stdout.rows);
    }

    this.show = function() {
        engine.fillBackground("red");
        engine.fillForeground("red");
        engine.drawPoint(this.x, this.y, engine.BOX);
    }

    this.update = function () {
        if (player.x == this.x && Math.round(Number(player.y)) == Math.floor(this.y)) {
            player.grow();
            this.resetPos();
        }
    }

    this.resetPos();

}

var player
var food;
function setup () {
    player = new Player();
    food = new Food();
}

function draw () {
    food.show();
    food.update();
    
    player.update();
    player.show();
}

engine = engine(setup, draw, {keyPressed: key => {
    switch (key) {
        case "w":
            player.dirX = 0;
            player.dirY = -1;

            // player.y += player.dirY; // this.fixes a bug that causes the snake to die when it is turned.
            break;
        case "a":
            player.dirX = -1;
            player.dirY = 0;
            
            // player.x += player.dirX; // this.fixes a bug that causes the snake to die when it is turned.
            break;
        case "s":
            player.dirX = 0;
            player.dirY = 1;
            
            // player.y += player.dirY; // this.fixes a bug that causes the snake to die when it is turned.
            break;
        case "d":
            player.dirX = 1;
            player.dirY = 0;
            
            // player.x += player.dirX; // this.fixes a bug that causes the snake to die when it is turned.
            break;
    }
}});