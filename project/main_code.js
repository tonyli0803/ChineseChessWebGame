'use strict';



//下面那行可以避免 console  alert  confirm  prompt  在  JSLint error
/*jslint devel: true */
//上面那行可以避免 console  alert  confirm  prompt  在  JSLint error
//reference ::http://www.jslint.com/help.html


var earth = new Image();
var checkerboard = new Array(10);
var player1 = [];
var player2 = [];


var Chess = function () {
    
    //var x = 0, y = 0,
    var color = 'black',
        content = '將',
        alive = true,
        self = this,
        
        is_alive = function () {
            return this.alive;
        },
        die = function () {
            this.alive = false;
        },
        //setColor = 
        
        /*setPosition = function (input_x, input_y) {
            this.x = input_x;
            this.y = input_y;
            return this.self;
        },*/
        setColor = function (input_color) {
            this.color = input_color;
            return this.self;
        },
        setChess = function (a, b, c, d, e) {
            //this.x = a;
            //this.y = b;
            this.color = c;
            this.content = d;
            this.alive = e;
            return this.self;
        };
    
    if (arguments.length === 3) {//////其實有可能會因為Chess.setColor(XXX).setPosition(x,y)出問題,得做測試後才能確定有沒有bug,以後constructor出問題優先看這裡
        //x = Array.prototype.shift.call(arguments);
        //y = Array.prototype.shift.call(arguments);
        color = Array.prototype.shift.call(arguments);
        content = Array.prototype.shift.call(arguments);
        alive = Array.prototype.shift.call(arguments);
    }
    
    return {
        //x: x,
        //y: y,
        content: content,
        color: color,
        alive: alive,
        die: die,
        setColor: setColor,
        //setPosition: setPosition,
        setChess: setChess
    };
};




var NullChess = new Chess('NT', '口', false);//NT  <==> NoThing

(function initial_player1() {
    player1[0] = new Chess('black', '將', true);
    player1[1] = new Chess('black', '士', true);
    player1[2] = new Chess('black', '士', true);
    player1[3] = new Chess('black', '象', true);
    player1[4] = new Chess('black', '象', true);
    player1[5] = new Chess('black', '車', true);
    player1[6] = new Chess('black', '車', true);
    player1[7] = new Chess('black', '馬', true);
    player1[8] = new Chess('black', '馬', true);
    player1[9] = new Chess('black', '包', true);
    player1[10] = new Chess('black', '包', true);
    player1[11] = new Chess('black', '卒', true);
    player1[12] = new Chess('black', '卒', true);
    player1[13] = new Chess('black', '卒', true);
    player1[14] = new Chess('black', '卒', true);
    player1[15] = new Chess('black', '卒', true);

})();
(function initial_player2() {
    player2[0] = new Chess('red', '帥', true);
    player2[1] = new Chess('red', '仕', true);
    player2[2] = new Chess('red', '仕', true);
    player2[3] = new Chess('red', '像', true);
    player2[4] = new Chess('red', '像', true);
    player2[5] = new Chess('red', '俥', true);
    player2[6] = new Chess('red', '俥', true);
    player2[7] = new Chess('red', '傌', true);
    player2[8] = new Chess('red', '傌', true);
    player2[9] = new Chess('red', '炮', true);
    player2[10] = new Chess('red', '炮', true);
    player2[11] = new Chess('red', '兵', true);
    player2[12] = new Chess('red', '兵', true);
    player2[13] = new Chess('red', '兵', true);
    player2[14] = new Chess('red', '兵', true);
    player2[15] = new Chess('red', '兵', true);

})();

(function initial_checkerboard(a, b) {
    var i = 0, j = 0, not_reverse = 0, reverse = 9;
    
    for (i = 0; i < 10; i = i + 1) {
        checkerboard[i] = new Array(9);
        for (j = 0; j < 9; j = j + 1) {
            checkerboard[i][j] = NullChess;
        }
    }
    
    checkerboard[0][4] = a[0];
    
    checkerboard[0][3] = a[1];
    checkerboard[0][5] = a[2];
    
    checkerboard[0][2] = a[3];
    checkerboard[0][6] = a[4];
    
    checkerboard[0][1] = a[7];
    checkerboard[0][7] = a[8];
    
    checkerboard[0][0] = a[5];
    checkerboard[0][8] = a[6];
    
    checkerboard[2][1] = a[9];
    checkerboard[2][7] = a[10];
    
    checkerboard[3][0] = a[11];
    checkerboard[3][2] = a[12];
    checkerboard[3][4] = a[13];
    checkerboard[3][6] = a[14];
    checkerboard[3][8] = a[15];
    
    
    //alert((parseInt(reverse)));
    checkerboard[reverse][4] = b[0];
    
    checkerboard[reverse][3] = b[1];
    checkerboard[reverse][5] = b[2];
    
    checkerboard[reverse][2] = b[3];
    checkerboard[reverse][6] = b[4];
    
    checkerboard[reverse][1] = b[7];
    checkerboard[reverse][7] = b[8];
    
    checkerboard[reverse][0] = b[5];
    checkerboard[reverse][8] = b[6];
    
    checkerboard[(reverse - 2)][1] = b[9];
    checkerboard[(reverse - 2)][7] = b[10];
    
    checkerboard[(reverse - 3)][0] = b[11];
    checkerboard[(reverse - 3)][2] = b[12];
    checkerboard[(reverse - 3)][4] = b[13];
    checkerboard[(reverse - 3)][6] = b[14];
    checkerboard[(reverse - 3)][8] = b[15];
})(player1, player2);

function print_checkerboard() {
    var i = 0, j = 0, outputString = '';
    console.log('line---' + '   ' + '零 一 二 三 四 五 六 七 八');
    for (i = 0; i < 10; i = i + 1) {
        outputString = '';
        for (j = 0; j < 9; j = j + 1) {
            outputString = outputString + ' ' + checkerboard[i][j].content;
        }
        console.log('line ' + i + '   ' + outputString);
    }
}




///利用 職責鍊模式 實作 判斷棋子可以往哪裡走
Function.prototype.next = function (fn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments);
        }
        return ret;
    };
    
};

var path_choice_NT = function (x, y) {
    if (checkerboard[x][y].content && checkerboard[x][y].content === 'NT') {
        var ret = {};
        return ret;
    } else {
        return 'nextSuccessor';
    }
};
var general = function (input_y, input_x) {
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '將' || checkerboard[input_y][input_x].content === '帥')) {
        var ret = [];

        if ((input_x + 1 > 2) && (input_x + 1 < 6)) {
            ret.push({x: input_x + 1, y: input_y});
        }
        if ((input_x - 1 > 2) && (input_x - 1 < 6)) {
            ret.push({x: input_x - 1, y: input_y});

        }

        
        if (((input_y + 1 > -1) && (input_y + 1 < 3)) || ((input_y + 1 > 6) && (input_y + 1 < 10))) {
            ret.push({x: input_x, y: input_y + 1});
            
        }
        if (((input_y - 1 > -1) && (input_y - 1 < 3)) || ((input_y - 1 > 6) && (input_y - 1 < 10))) {
            ret.push({x: input_x, y: input_y - 1});

        }
        
        //console.dir(ret);
        return ret;
    } else {
        return 'nextSuccessor';
    }
};
var guard = function (input_y, input_x) {
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '士' || checkerboard[input_y][input_x].content === '仕')) {
        
        var ret = [], i, ans = [];
        ret.push({x: input_x + 1, y: input_y + 1});
        ret.push({x: input_x + 1, y: input_y - 1});
        ret.push({x: input_x - 1, y: input_y + 1});
        ret.push({x: input_x - 1, y: input_y - 1});

        for (i = 0; i < ret.length; i = i + 1) {
            
            if ((ret[i].x > 2 && ret[i].x < 6)) {
                
                if (((ret[i].y > -1 && ret[i].y < 3)) || ((ret[i].y > 6 && ret[i].y < 10))) {
                    ans.push(ret[i]);
                }
            }
        }
        return ans;
        
    } else {
        return 'nextSuccessor';
    }
};
var elephant = function (input_y, input_x) {
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '象' || checkerboard[input_y][input_x].content === '像')) {
        
        var ret = [], i, ans = [];
        ret.push({x: input_x + 2, y: input_y + 2});
        ret.push({x: input_x + 2, y: input_y - 2});
        ret.push({x: input_x - 2, y: input_y + 2});
        ret.push({x: input_x - 2, y: input_y - 2});

        for (i = 0; i < ret.length; i = i + 1) {
            //console.log(Math.floor(ret[i].y / 5) + ' ' + Math.floor(input_y / 5));
            if ((ret[i].x > -1 && ret[i].x < 9)) {
                if (((ret[i].y > -1 && ret[i].y < 10))) {
                    if (Math.floor(ret[i].y / 5) === Math.floor(input_y / 5)) {
                        ans.push(ret[i]);
                    }
                }
            }
        }
        return ans;
        
    } else {
        return 'nextSuccessor';
    }
};



var knight = function (input_y, input_x) {
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '馬' || checkerboard[input_y][input_x].content === '傌')) {
        
        var ret = [], i, ans = [];
        if ((input_x + 1 > -1 && input_x + 1 < 9) && (checkerboard[input_y][input_x + 1] === NullChess)) {
            ret.push({x: input_x + 2, y: input_y + 1});
            ret.push({x: input_x + 2, y: input_y - 1});
            
        }
        if ((input_x - 1 > -1 && input_x - 1 < 9) && (checkerboard[input_y][input_x - 1] === NullChess)) {
            ret.push({x: input_x - 2, y: input_y + 1});
            ret.push({x: input_x - 2, y: input_y - 1});
        }
        if ((input_y + 1 > -1 && input_y + 1 < 10) && (checkerboard[input_y][input_x + 1] !== NullChess)) {
            ret.push({x: input_x + 1, y: input_y + 2});
            ret.push({x: input_x - 1, y: input_y + 2});
        }
        if ((input_y - 1 > -1 && input_y - 1 < 10) && (checkerboard[input_y][input_x + 1] !== NullChess)) {
            ret.push({x: input_x + 1, y: input_y - 2});
            ret.push({x: input_x - 1, y: input_y - 2});
        }

        for (i = 0; i < ret.length; i = i + 1) {
            if (ret[i].x > -1 && ret[i].x < 9) {
                if (((ret[i].y > -1 && ret[i].y < 10))) {
                    ans.push(ret[i]);
                }
            }
        }
        console.log('in knight');
        console.dir(ans);
        console.log('out of knight');

        return ans;
        
    } else {
        return 'nextSuccessor';
    }
};
var chariot = function (input_y, input_x) {
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '車' || checkerboard[input_y][input_x].content === '俥')) {
        
        var ret = [], i = 0, j = 0;
        
        i = 1;
        j = 0;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            ret.push({x: input_x + i, y: input_y + j});
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            i = i + 1;
        }
        
        i = -1;
        j = 0;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            ret.push({x: input_x + i, y: input_y + j});
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            i = i - 1;
        }
        
        i = 0;
        j = 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            ret.push({x: input_x + i, y: input_y + j});
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            j = j + 1;
        }
        
        i = 0;
        j = -1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            ret.push({x: input_x + i, y: input_y + j});
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            j = j - 1;
        }
        return ret;
        
    } else {
        return 'nextSuccessor';
    }
};
var cannon = function (input_y, input_x) {///!(x===x)  不可以用    不知道  x !== x會部會對
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '包' || checkerboard[input_y][input_x].content === '炮')) {
        
        var ret = [], i = 0, j = 0;
        
        i = 1;
        j = 0;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            ret.push({x: input_x + i, y: input_y + j});
            i = i + 1;
        }
        i = i + 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if ((checkerboard[input_y + j][input_x + i] !== NullChess)) {
                ret.push({x: input_x + i, y: input_y + j});
                break;
            }
            i = i + 1;
        }
        
        i = -1;
        j = 0;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            ret.push({x: input_x + i, y: input_y + j});
            i = i - 1;
        }
        i = i - 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if ((checkerboard[input_y + j][input_x + i] !== NullChess)) {
                ret.push({x: input_x + i, y: input_y + j});
                break;
            }
            i = i - 1;
        }
        
        i = 0;
        j = 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            ret.push({x: input_x + i, y: input_y + j});
            j = j + 1;
        }
        j = j + 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if ((checkerboard[input_y + j][input_x + i] !== NullChess)) {
                ret.push({x: input_x + i, y: input_y + j});
                break;
            }
            j = j + 1;
        }
        
        i = 0;
        j = -1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if (checkerboard[input_y + j][input_x + i] !== NullChess) {
                break;
            }
            ret.push({x: input_x + i, y: input_y + j});
            j = j - 1;
        }
        j = j - 1;
        while (((input_x + i) > -1 && (input_x + i) < 9) && ((input_y + j) > -1 && (input_y + j) < 10)) {
            if ((checkerboard[input_y + j][input_x + i] !== NullChess)) {
                ret.push({x: input_x + i, y: input_y + j});
                break;
            }
            j = j - 1;
        }
        return ret;
        
    } else {
        return 'nextSuccessor';
    }
};
var soldier1 = function (input_y, input_x) {
    ///偷懶簡化  以後有空再做兩邊都可以的
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '兵')) {
        
        var ret = [], i, ans = [];
        
        ret.push({x: input_x, y: input_y - 1});

        if (Math.floor(input_y / 5) === 0) {
            ret.push({x: input_x + 1, y: input_y});
            ret.push({x: input_x - 1, y: input_y});
        }

        return ret;
        
    } else {
        return 'nextSuccessor';
    }
};
var soldier2 = function (input_y, input_x) {
    ///偷懶簡化  以後有空再做兩邊都可以的
    if (checkerboard[input_y][input_x].content && (checkerboard[input_y][input_x].content === '卒')) {
        
        var ret = [], i, ans = [];
        
        ret.push({x: input_x, y: input_y + 1});

        if (Math.floor(input_y / 5) === 1) {
            ret.push({x: input_x + 1, y: input_y});
            ret.push({x: input_x - 1, y: input_y});
        }

        return ret;
        
    } else {
        return 'nextSuccessor';
    }
};


var path_choice = path_choice_NT.next(general).next(guard).next(elephant).next(knight).next(chariot).next(cannon).next(soldier1).next(soldier2);

///檢查友軍火力以及吃掉對方的人
var valid_path = function (x, y) {
    
    var choice = null,
        ret = [],
        i;
    choice = path_choice(y, x);
    ///其實想用slice
    
    if (choice !== null) {
        for (i = 0; i < choice.length; i = i + 1) {
            try {
                if (checkerboard[y][x].color !== checkerboard[choice[i].y][choice[i].x].color) {
                    ret.push(choice[i]);
                }
            } catch (err) {
                console.dir(choice);
            }

        }
        
        return ret;
    } else {
        return null;
    }
};
///未驗證
///未驗證
///未驗證
 

//print_checkerboard();


/*
checkerboard[7][0] = player2[4];
checkerboard[7][4] = player2[4];
checkerboard[7][8] = player2[4];

checkerboard[5][2] = player2[4];
checkerboard[5][6] = player2[4];

print_checkerboard();

console.dir(path_choice(9, 2));
console.dir(path_choice(9, 6));

console.dir(path_choice(7, 0));
console.dir(path_choice(7, 4));
console.dir(path_choice(7, 8));

console.dir(path_choice(5, 2));
console.dir(path_choice(5, 6));
*/





var KEYWORD = {"LEFT": 37, "RIGHT": 39, "UP": 38, "DOWN": 40, "ENTER": 32};


var cursor = (function () {
    var x = 0, y = 0,
        initial = function () {
            x = 0;
            y = 0;
        },
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

//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT
//////////////GUI COMPONENT


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

initial();





























//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分//////////////最主要程式運行的部分
//////////////在這之上的都算是kernal 的部分
var game = (function () {
    var procedure_flag = 'moving',
        whos_turn_flag = 'black',
        selected__flag = null,
        self = this,
        
        initial = function () {
            procedure_flag = 'moving';
            whos_turn_flag = 'black';
            selected__flag = null;
            self = this;
        },
        test_console_checkerboard = function () {
            var i = 0, j = 0, outputString = '', information;
            
            information = new Array(10);
            for (i = 0; i < 10; i = i + 1) {
                information[i] = new Array(9);
                for (j = 0; j < 9; j = j + 1) {
                    information[i][j] = '..';
                }
            }
            
            if ((selected__flag !== null)) {
                information[selected__flag.y][selected__flag.x] = '●●';
                var tmp = valid_path(selected__flag.x, selected__flag.y);
                if (tmp !== null) {
                    for (i = 0; i < tmp.length; i = i + 1) {
                        information[tmp[i].y][tmp[i].x] = '○○';
                    }
                }
            }
            
            
            information[cursor.y][cursor.x] = '一';
                                              
            
            
            
            console.log('line---' + '    ' + '零  一  二  三  四  五  六  七  八');
            for (i = 0; i < 10; i = i + 1) {
                outputString = '';
                for (j = 0; j < 9; j = j + 1) {
                    outputString = outputString + '  ' + checkerboard[i][j].content;
                }
                console.log('line ' + i + '   ' + outputString);
            
                outputString = '';
                for (j = 0; j < 9; j = j + 1) {
                    outputString = outputString + '  ' + information[i][j];
                }
                console.log('line ' + i + '  ' + outputString);
            }
        },
        
        change_turn = function () {
            console.log('change turn!!!');
            var tmp;
            if (whos_turn_flag === 'black') {
                whos_turn_flag = 'red';
            } else if (whos_turn_flag === 'red') {
                whos_turn_flag = 'black';
            }
            
        },
        select = function () {
            if (selected__flag === null) {
                
                if (checkerboard[cursor.y][cursor.x].color === whos_turn_flag) {
                ///if it is a availiable select
                    selected__flag = {x: cursor.x, y: cursor.y};
                    
                }
                
            } else {
                var tmp = valid_path(selected__flag.x, selected__flag.y),
                    i;
                for (i = 0; i < tmp.length; i = i + 1) {
                    if ((tmp[i].x === cursor.x) && (tmp[i].y === cursor.y)) {
                        if (checkerboard[cursor.y][cursor.x] !== NullChess) {
                            checkerboard[cursor.y][cursor.x].die();
                        }
                        
                        checkerboard[cursor.y][cursor.x] = checkerboard[selected__flag.y][selected__flag.x];
                        checkerboard[selected__flag.y][selected__flag.x] = NullChess;
                        
                        procedure_flag = 'take_turns_or_end_game';
                        game_procedure();
                    }
                }
                selected__flag = null;
            }
            
        },
        moving_chess = function (e) {
            console.log('moving chess');
            e = e || window.event;
            
            console.clear();
            
            switch (e.keyCode) {
                    
            case KEYWORD.LEFT:
                //console.log("left");
                cursor.left_move();
                break;

            case KEYWORD.RIGHT:
                //console.log("right");
                cursor.right_move();
                break;

            case KEYWORD.UP:
                //console.log("up");
                cursor.up_move();
                break;

            case KEYWORD.DOWN:
                //console.log("down");
                cursor.down_move();
                break;

            case KEYWORD.ENTER:
                //console.log("enter");
                select();
                break;

            default:
                console.log("type error");
                alert("please type up ,down ,right or left ");
                break;
            }
            
            
            cursor.showCursor();
            test_console_checkerboard();
        },
        
        end_of_game = function () {
            
            alert('the game is end!!!');
        },
        
        judging_game = function (e) {
            //console.log('judging!!!');
            console.dir(player1[0]);
            console.dir(player2[0]);
            if (!((player1[0].alive) && (player2[0].alive))) {
                end_of_game();
            }
            
            procedure_flag = 'moving';
            change_turn();
        },
        
        
        
        
        
        
        
        initial_game = function () {
            console.log('initial game!!!');
            test_console_checkerboard();
        },
        
        game_procedure = function (e) {
            
            console.log('gaming!!!');
            
            switch (procedure_flag) {
            case 'moving':
                return moving_chess(e);
                
                    
            case 'take_turns_or_end_game':
                return judging_game(e);
            }
            
        };
    function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

        
    ctx.drawImage(background, 0, 0, 500, 500);
    ctx.drawImage(cursor_image, 55 * cursor.x - 5, 50 * cursor.y - 5, 60, 60);
    
    
    var i, j;
    
    if ((selected__flag !== null)) {
        var tmp = valid_path(selected__flag.x, selected__flag.y);
        if (tmp !== null) {
            for (i = 0; i < tmp.length; i = i + 1) {
                ctx.drawImage(possible_choice, 55 * tmp[i].x - 5 + 20, 50 * tmp[i].y - 5 + 20, 30, 30);
            }
        }
    }
    
    
    for (i = 0; i < 9; i = i + 1) {
        for (j = 0; j < 10; j = j + 1) {
            if(checkerboard[j][i].content === '將'){
                ctx.drawImage(player1_chess_image[0], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '士'){
                ctx.drawImage(player1_chess_image[1], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '象'){
                ctx.drawImage(player1_chess_image[2], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '車'){
                ctx.drawImage(player1_chess_image[3], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '馬'){
                ctx.drawImage(player1_chess_image[4], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '包'){
                ctx.drawImage(player1_chess_image[5], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '卒'){
                ctx.drawImage(player1_chess_image[6], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '帥'){
                ctx.drawImage(player2_chess_image[0], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '仕'){
                ctx.drawImage(player2_chess_image[1], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '像'){
                ctx.drawImage(player2_chess_image[2], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '俥'){
                ctx.drawImage(player2_chess_image[3], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '傌'){
                ctx.drawImage(player2_chess_image[4], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '炮'){
                ctx.drawImage(player2_chess_image[5], 55 * i, 50 * j, 50, 50);
            } else if(checkerboard[j][i].content === '兵'){
                ctx.drawImage(player2_chess_image[6], 55 * i, 50 * j, 50, 50);
            }
            
        }
//        ctx.drawImage(player1_chess_image[i], 0, 100 * i, 50, 50);
//        ctx.drawImage(player2_chess_image[i], 100, 100 * i, 50, 50);
    }
    
    window.requestAnimationFrame(draw);
}
        
    
    return {
        draw: draw,
        selected__flag: selected__flag,
        whos_turn_flag: whos_turn_flag,
        change_turn: change_turn,
        initial_game: initial_game,
        game_procedure: game_procedure,
        end_of_game: end_of_game
        
    };

})();

window.addEventListener("load", game.initial_game, true);
window.addEventListener("keydown", game.game_procedure, false);
game.draw();
//cursor.showCursor();