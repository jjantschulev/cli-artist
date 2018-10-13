# A drawing library for the console.

Ever wanted to do some propper ASCII art? Or a game in old-style BASIC?
Well, we have. And here is a library to do just that.

---
## Initialisation

To get started, firsly import the library into your node project like so:

`let engine = require('stdout-draw');`
>**Note:** the engine must be defined as a *variable* not a constant.

Then initialise the engine and allow access to the library's core functionality:

`engine = engine(<setup>, <draw>);`

The `setup` and `draw` parameters are required functions. The `setup` function runs at the beginning of your program, and the `draw` function loops until the program exists.

---
## Functions

* `engine.drawPoint(<x>, <y>, <char>)`  
   Draws a point at (x, y) with the character being defined by `char`

* `engine.drawRect(<x>, <y>, <w>, <h>, <char>)`  
   Draws a rectangle at (x, y) with width of `w` and height of `h` out of `char` characters

* `engine.drawLine(<x>, <y>, <x_dir>, <y_dir>, <length>, <char>)`  
   Draws a line from (x, y) at angle (x_dir, y_dir) for `length` characters of `char` characters

* `engine.drawCircle(<x>, <y>, <r>, <char>)`  
    Draws a (sort-of) perfect circle at (x, y) with a radius of `r` of character `char`

* `engine.constrain(<n>, <min>, <max>)`  
   Constrains `n` between `min` and `max`

* `engine.clear()`  
    Erases everything for 1 frame

* `engine.fillForeground(<color>)`  
    Sets the foreground colour of the following characters placed

* `engine.fillBackground(<color>)`  
    Sets the background colour of the following characters placed

---
## Variables

* `engine.width`  
    The available space horizontally to draw

* `engine.height`  
    The available space vertically to draw

---
## Colours
The colours that you can use in the foreground and background functions are listed below. You can use them case-insensitively throughout your code.

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* lightblack
* lightred
* lightgreen
* lightyellow
* lightblue
* lightmagenta
* lightcyan
* lightwhite

---
## Example
A set of examples have been provided in the 'test' folder. Run one by navigating into the directory in any terminal and run `node <example>`. 

---
## Issues
The project is in very early stages of development and some issues are apparent and are being addressed. If you find an issue, support us by reporting it to our [GitHub page](https://github.com/kraken22/stdout-rendering/issues)