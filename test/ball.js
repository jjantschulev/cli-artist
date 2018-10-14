let engine = require('../engine'); // this doesn't need explaining ^_^.
class Ball {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.speed = 0;
        this.acc = 0.3;
    }

    show() {
        engine.fillBackground('cyan'); // change the ball's colour
        engine.fillForeground('cyan'); // change the ball's colour
        engine.drawPoint(Math.floor(this.x), Math.floor(this.y), "O"); // Draw an - at this.x and this.y.
        engine.drawPoint(Math.floor(this.x + 1), Math.floor(this.y), "O"); // Draw an - at this.x and this.y.
        // engine.noFill();
    }
    update() {
        // =- <PHYSICS> -= //

        if (this.y > engine.height - 1) {
            this.speed *= -1;
            this.y = engine.height - 1;
        }
        this.speed += this.acc;
        this.y += this.speed;

        // =- </PHYSICS> -= //
    }
}

let b = [];

const setup = () => {
    for (let i = 0; i < 15; i++) { // create 15 balls
        b.push(new Ball(10 * (i + 2), 10 + ((i + 3) * 5))); // Create a new ball.
    }
}

const draw = () => {
    engine.fillForeground('red');
    engine.noBg();
    engine.drawText(1, 1, "Balls Bouncing");
    b.forEach(ball => { // update and show each ball
        ball.show();
        ball.update();
    })
}

const keyPressed = (key) => {

}

engine.init(setup, draw, keyPressed, 20) // Initialise the engine