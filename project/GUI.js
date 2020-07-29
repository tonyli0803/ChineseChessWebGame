
'use strict';
var background = new Image();
var possible_choice = new Image();
var cursor_image = new Image();
var player1_chess_image = [];
var player2_chess_image = [];

function initial() {
    var i = 0;
    background.src = './the_background.png';
    possible_choice.src = './choice.png';
    cursor_image.src = './cursor.png';
    
    for (i = 0; i < 7; i = i + 1) {
        player1_chess_image[i] = new Image();
        player1_chess_image[i].src = ('./1_' + i + '.png');
        
        player2_chess_image[i] = new Image();
        player2_chess_image[i].src = ('./2_' + i + '.png');
        
    }
    
}
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

        
    ctx.drawImage(background, 0, 0, 500, 500);
    ctx.drawImage(possible_choice, 0, 0, 60, 60);
    ctx.drawImage(cursor_image, 50, 50, 60, 60);
    var i;
    for (i = 0; i < 7; i = i + 1) {
        ctx.drawImage(player1_chess_image[i], 0, 100 * i, 50, 50);
        ctx.drawImage(player2_chess_image[i], 100, 100 * i, 50, 50);
    }
    
    window.requestAnimationFrame(draw);
}
initial();
draw();
console.log('Im here!!!');