// THIS IS A REALLY EARLY PROTOTYPE. THE CODE IS VERY MESSY. PLZ DONT KILL ME. If you want you can refactor it into two files. One library file and another sketch.js file. 

// START RENDERING ENGINE CODE:

let funcs = {}

let setup, draw;

funcs.BOX = "\u2588";
funcs.CIRCLE = "\u26AA";
funcs.EMPTY = ' ';

let matrix = []; // Matrix should not be accesible outside engine

funcs.width = process.stdout.columns;
funcs.height = process.stdout.rows - 1;


let createMatrix = function () {
    funcs.width = process.stdout.columns;
    funcs.height = process.stdout.rows - 1;

    matrix = [];
    for (let i = 0; i < funcs.height; i++) {
        matrix[i] = [];
        for (let j = 0; j < funcs.width; j++) {
            matrix[i][j] = '';

        }
    }
}

let renderMatrix = function () {
    let string = "";
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            string += matrix[y][x] || ' ';
        }
    }
    process.stdout.write('\033[2J') // move cursor to 0, 0
    process.stdout.write(string); // print contents of matrix
}

funcs.clear = function () {
    for (let y = 0; y < funcs.height; y++) {
        for (let x = 0; x < funcs.width; x++) {
            matrix[y][x] = '';
        }
    }
}

funcs.drawRect = function (x, y, w, h, value) {
    for (let i = y; i < y + h; i++) {
        for (let j = x; j < x + w; j++) {
            funcs.drawPoint(j, i, value);
        }
    }
}

funcs.drawPoint = function (x, y, value) {
    if (y >= 0 && y < funcs.height && x >= 0 && x < funcs.width) {
        matrix[funcs.constrain(y, 0, funcs.height)][funcs.constrain(x, 0, funcs.width)] = value;
    }
}

funcs.drawLine = function (x, y, dirX, dirY, length, value) {
    for (let i = 0; i < length; i++) {
        funcs.drawPoint(x, y, value);
        x += dirX;
        y += dirY;
    }
}

funcs.constrain = function (x, min, max) {
    return x < min ? min : x > max ? max : x;
}

module.exports = function (s, d) {
    setup = s;
    draw = d;

    setup();
    setInterval(() => {
        createMatrix();
        draw();
        renderMatrix();
    }, 30);

    return funcs;
}

process.on('SIGINT', e => {process.stdout.write('\033[2J'); process.exit();})