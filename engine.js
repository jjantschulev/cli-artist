// THIS IS A REALLY EARLY PROTOTYPE. THE CODE IS VERY MESSY. PLZ DONT KILL ME. If you want you can refactor it into two files. One library file and another sketch.js file. 

// START RENDERING ENGINE CODE:


module.exports.BOX = "\u2588";
module.exports.CIRCLE = "\u26AA";
module.exports.EMPTY = ' ';

var matrix = []; // Matrix should not be accesible outside engine

module.exports.width = process.stdout.columns;
module.exports.height = process.stdout.rows - 1;


module.exports.createMatrix = function () {
    module.exports.width = process.stdout.columns;
    module.exports.height = process.stdout.rows - 1;

    matrix = [];
    for (var i = 0; i < module.exports.height; i++) {
        matrix[i] = [];
        for (var j = 0; j < module.exports.width; j++) {
            matrix[i][j] = 0;

        }
    }
}

module.exports.renderMatrix = function () {
    var string = "";
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (!matrix[y][x]) matrix[y][x] = module.exports.EMPTY;
            string += matrix[y][x];
        }
    }
    console.log(string);
}

module.exports.drawBackground = function () {
    for (var y = 0; y < module.exports.height; y++) {
        for (var x = 0; x < module.exports.width; x++) {
            matrix[y][x] = 0;
        }
    }
}

module.exports.drawRect = function (x, y, w, h, value) {
    for (var i = y; i < y + h; i++) {
        for (var j = x; j < x + w; j++) {
            drawPoint(j, i, value);
        }
    }
}

module.exports.drawPoint = function (x, y, value) {
    if (y >= 0 && y < module.exports.height && x >= 0 && x < module.exports.width) {
        matrix[y][x] = value;
    }
}

module.exports.drawLine = function (x, y, dirX, dirY, length, value) {
    for (var i = 0; i < length; i++) {
        drawPoint(x, y, value);
        x += dirX;
        y += dirY;
    }
}







