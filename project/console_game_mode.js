'use strict';
/*jslint devel: true */

var KEYWORD = {"LEFT": 37, "RIGHT": 39, "UP": 38, "DOWN": 40, "ENTER": 13};


var cursor = (function () {
    var x = 0, y = 0,
        setCursor = function (input_x, input_y) {
            this.x = input_x;
            this.y = input_y;
        },
        showCursor = function () {
            console.log('x = ' + this.x + ' , y = ' + this.y);
        },
        left_move = function () {
            var i = this.x - 1;
            if (i < 0) {
                i = 8;
            }
            cursor.setCursor(i, this.y);
    
        },
        right_move = function () {
            var i = this.x + 1;
            if (i > 8) {
                i = 0;
            }
            cursor.setCursor(i, this.y);
    
        },
        up_move = function () {
            var i = this.y - 1;
            if (i < 0) {
                i = 9;
            }
            cursor.setCursor(this.x, i);
    
        },
        down_move = function () {
            var i = this.y + 1;
            if (i > 9) {
                i = 0;
            }
            cursor.setCursor(this.x, i);
        };

    return {
        x: x,
        y: y,
        left_move: left_move,
        right_move: right_move,
        up_move: up_move,
        down_move: down_move,
        setCursor: setCursor,
        showCursor: showCursor
    };
})();





var game = (function () {
    var procedure_flag = 'moving',
        whos_turn_flag = 'black',
        selected__flag = null,
        
        
        change_turn = function () {
            if (whos_turn_flag === 'black') {
                whos_turn_flag = 'red';
            }
            if (whos_turn_flag === 'red') {
                whos_turn_flag = 'black';
            }
            
        },
        select = function () {
            if(selected__flag === null){
                /*
                if(checkerboard[cursor.y][cursor.x].color === whos_turn_flag){
                ///if it is a availiable select
                    selected__flag = valid_path(cursor.x,cursor.y);
                    
                }
                */
            }
            
        },
        moving_chess = function (e) {
            console.log('moving chess');
            e = e || window.event;
            
            
            
            switch (e.keyCode) {
                    
            case KEYWORD.LEFT:
                console.log("left");
                cursor.left_move();
                break;

            case KEYWORD.RIGHT:
                console.log("right");
                cursor.right_move();
                break;

            case KEYWORD.UP:
                console.log("up");
                cursor.up_move();
                break;

            case KEYWORD.DOWN:
                console.log("down");
                cursor.down_move();
                break;

            case KEYWORD.ENTER:
                console.log("enter");
                select();
                break;

            default:
                console.log("type error");
                alert("please type up ,down ,right or left ");
                break;
            }
            
            
            cursor.showCursor();
        
        },
        
        
        judging_game = function (e) {
            console.log('judging!!!');
        },
        
        
        
        
        
        
        
        initial_game = function () {
            console.log('initial game!!!');
        },
        
        game_procedure = function (e) {
            
            console.log('gaming!!!');
            
            switch (procedure_flag) {
            case 'moving':
                return moving_chess(e);
                
                    
            case 'take_turns_or_end_game':
                return judging_game(e);
            }
            
        },
                    
        end_of_game = function () {
            
            console.log('the game is end!!!');
        };
        
    
    return {
        initial_game: initial_game,
        game_procedure: game_procedure,
        end_of_game: end_of_game
        
    };

})();


window.addEventListener("load", game.initial_game, true);
window.addEventListener("keydown", game.game_procedure, false);

cursor.showCursor();