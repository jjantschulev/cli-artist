// THIS IS A REALLY EARLY PROTOTYPE. THE CODE IS VERY MESSY. PLZ DONT KILL ME. If you want you can refactor it into two files. One library file and another sketch.js file. 

// START RENDERING ENGINE CODE:

const funcs = {} 

const BOX = "\u2588";
const CIRCLE = "\u26AA";
const EMPTY = ' ';

funcs.matrix = [];

funcs.width = process.stdout.columns;
funcs.height = process.stdout.rows;

funcs.createMatrix = function() {
    funcs.width = process.stdout.columns;
    funcs.height = process.stdout.rows;

    funcs.matrix = [];
    for (var i = 0; i < funcs.height; i++) {
        funcs.matrix[i] = [];
        for (var j = 0; j < funcs.width; j++) {
            funcs.matrix[i][j] = 0;
        }
    }
}

funcs.createMatrix();

funcs.renderMatrix = function() {
    var string = "";
    for (var y = 0; y < funcs.matrix.length; y++) {
        for (var x = 0; x < funcs.matrix[y].length; x++) {
            if (!funcs.matrix[y][x]) funcs.matrix[y][x] = '';
            string += funcs.matrix[y][x];
        }
    }
    process.stdout.write('\033[2J') // move cursor to 0, 0
    process.stdout.write(string); // print contents of matrix
}

funcs.drawRect = function(x, y, w, h, value) {
    for (var i = y; i < y + h; i++) {
        for (var j = x; j < x + w; j++) {
            if (i >= 0 && i < funcs.height && j >= 0 && j < funcs.width) {
                funcs.matrix[i][j] = value;
            }
        }
    }
}

funcs.init = function (draw) {
    funcs.createMatrix();  // This clears the background by rebuilding the matrix array. Alternatively you could set all the array elements to zero which might be more efficient;
    setInterval(() => {
        draw();
        funcs.renderMatrix(); // This renders the matrix to the console window. Only call this at the end of ths draw loop;
    }, 30); // Make sure draw function is defined.This is setting up the update loop.
}
// you could add more functions like drawLine etc... 

module.exports = funcs;
// END RENDERING ENGINE CODE
