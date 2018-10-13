let engine = require('../engine_backup');
const fs = require('fs');
const path = require('path');

class Ball {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.speed = 0;
        this.acc = 0.3;
    }
    
    show () {
        engine.drawPoint(Math.floor(this.x), Math.floor(this.y), "o");
    }
    update () {
        if (this.y > engine.height) {
            this.speed *= -1;
            this.y = engine.height;
        }
        this.speed += this.acc;
        this.y += this.speed;

        // this.y = engine.constrain(this.y, 0, engine.height - 1)
    }
}

let b;

const setup = () => {
    b = new Ball(10, 10);
}

const draw = () => {
    b.update();
    b.show();
}

engine = engine(setup, draw)