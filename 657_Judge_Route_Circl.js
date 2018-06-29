var judgeCircle = function(moves) {
    var x = 0, y = 0;
    moves.split("").forEach(function(item){
        if(item == 'U') x++;
        if(item == 'D') x--;
        if(item == 'L') y--;
        if(item == 'R') y++;
    });
    return (x+y) == 0;
    
};
