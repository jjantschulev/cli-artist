let engine = require('../engine'); // this doesn't need explaining ^_^.
class Ball {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.speed = 0;
        this.acc = 0.3;
    }

    show() {
        this.colour = this.colour ? this.colour : engine.avaliableColors[Math.floor(Math.random() * engine.avaliableColors.length)];
        // engine.fillBackground('cyan'); // change the ball's colour
        engine.fillForeground(this.colour); // change the ball's colour
        // engine.drawPoint(Math.floor(this.x), Math.floor(this.y), "O"); // Draw an - at this.x and this.y.
        engine.drawText(Math.floor(this.x), Math.floor(this.y), "Ball"); // Draw the text 'ball' at this.x and this.y.
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
    engine.drawText(1, 1, "Balls Bouncing");
    b.forEach(ball => { // update and show each ball
        ball.show();
        ball.update();
    })
}

engine = engine(setup, draw) // Initialise the engine