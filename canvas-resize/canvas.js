var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//we're passing a bunch of methods here under the 2d space features of canvas (super object)
var c = canvas.getContext('2d'); //c in canvas always stands for context

c.fillRect(100, 100, 100, 100);
