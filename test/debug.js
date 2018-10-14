const engine = require('../engine')

const setup = () => {
    engine.debug.enable(true);

    console.log('hello');
    console.warn('hello');
    console.error('hello');

    test();

    console.log("correctly printing");
}

const draw = () => {
    engine.fillBackground('blue');
    engine.fillForeground('blue');
    engine.drawCircle(engine.width / 2, engine.height / 2, 20, "0");
}

let test = () => {
    throw new Error("hello world");
}

engine.init(setup, draw);