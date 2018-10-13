let engine = require('../engine'); // this doesn't need explaining ^_^.

class Ball {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.speed = 0;
        this.acc = 0.3;
    }
    
    show () {
        engine.drawPoint(Math.floor(this.x), Math.floor(this.y), "o"); // Draw an * at this.x and this.y.
    }
    update () {
        // =- <PHYSICS> -= //

        if (this.y > engine.height) {
            this.speed *= -1; 
            this.y = engine.height;
        }
        this.speed += this.acc;
        this.y += this.speed;

        // =- </PHYSICS> -= //
    }
}

let b;

const setup = () => {
    b = new Ball(10, 10); // Create a new ball.
}

const draw = () => {
    b.update(); // Calculate the ball's new position.
    b.show(); // Display the ball.
}

engine = engine(setup, draw) // Initialise the engine