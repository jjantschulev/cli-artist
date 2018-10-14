let engine = require('../engine');

let particles = [];

let setup = () => {
    for (let i = 0; i < engine.width; i++) {
        particles.push(new particle(i));
    }
}

let draw = () => {
    particles.forEach(p => {
        p.show();
        p.update();
    })
}

class particle {
    constructor (x) {
        this.x = x;
        this.y

        this.update();
    }

    show () {
        engine.fillBackground('green');
        engine.fillForeground('green');
        engine.drawPoint(this.x, this.y, ".");
    }

    update () {
        this.y = Math.sin(engine.map(this.x, 0, engine.width, 0, 10) + (engine.millis / 1000)) * 10 + engine.height / 2;
    }
}

engine.init(setup, draw, null, 15);