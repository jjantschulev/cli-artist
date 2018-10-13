// THIS IS A REALLY EARLY PROTOTYPE. THE CODE IS VERY MESSY. PLZ DONT KILL ME. If you want you can refactor it into two files. One library file and another sketch.js file. 

// START RENDERING ENGINE CODE:


const BOX = "\u2588";
const CIRCLE = "\u26AA";
const EMPTY = ' ';

var matrix = [];

var width = process.stdout.columns;
var height = process.stdout.rows;

createMatrix();

function createMatrix() {
    var width = process.stdout.columns;
    var height = process.stdout.rows;

    matrix = [];
    for (var i = 0; i < height; i++) {
        matrix[i] = [];
        for (var j = 0; j < width; j++) {
            matrix[i][j] = 0;

        }
    }
}

function renderMatrix() {
    var string = "";
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (!matrix[y][x]) matrix[y][x] = EMPTY;
            string += matrix[y][x];
        }
    }
    console.log(string);
}

function drawRect(x, y, w, h, value) {
    for (var i = y; i < y + h; i++) {
        for (var j = x; j < x + w; j++) {
            if (i >= 0 && i < height && j >= 0 && j < width) {
                matrix[i][j] = value;
            }
        }
    }
}

// you could add more functions like drawLine etc... 

setInterval(draw, 30); // Make sure draw function is defined.This is setting up the update loop.

// END RENDERING ENGINE CODE

// The ball is just an example. You can do much other stuff aswell.
var ball = new Ball(Math.floor(width / 2), 3);

function draw() {
    createMatrix(); // This clears the background by rebuilding the matrix array. Alternatively you could set all the array elements to zero which might be more efficient;

    ball.update();
    ball.show();

    renderMatrix(); // This renders the matrix to the console window. Only call this at the end of ths draw loop;
}


function Ball(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.acc = 0.3;

    this.show = function () {
        // Make sure all values are rounded to integers.
        drawRect(this.x, Math.floor(this.y), 1, 1, CIRCLE); // This draws a rectangle to the matrix, which is later rendered to the console by calling renderMatrix();
        // You can choose what character you would like to print to the console by either using the predefined constants or passing a single character string as the last parameter;
    }
    this.update = function () {
        // Random math to make it fall and bounce
        if (this.y > height - 1) {
            this.speed *= -1;
            this.y = height - 1;
        }
        this.speed += this.acc;
        this.y += this.speed;
    }
}

