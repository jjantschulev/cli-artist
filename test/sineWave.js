const engine = require('../engine');

let particles = [];

let setup = () => {
    for (let i = 0; i < engine.width * 2; i++) {
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
        this.index = x;
        this.x = engine.loop(x, 0, engine.width);
        this.y

        this.update();
    }

    show () {
        engine.fillBackground(this.index > engine.width ? 'blue' : 'green');
        engine.fillForeground(this.index > engine.width ? 'blue' : 'green');
        engine.drawPoint(this.x, this.y, ".");
    }

    update () {
        this.y = (this.index > engine.width ? -1 : 1) * Math.sin(engine.map(this.x, 0, engine.width, 0, 10) + (engine.millis / 500)) * 10 + engine.height / 2;
    }
}

engine.init(setup, draw, null, 15);