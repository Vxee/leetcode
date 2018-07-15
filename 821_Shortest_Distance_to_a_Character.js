var shortestToChar = function(S, C) {
    var list = [],
        arr = [];
    for(var i = 0; i < S.length; i++){
        if(S[i] === C){
            list.push(i);
        }
    }
    for(var j = 0; j < S.length; j++){
        var min = 10001,
            minIndex;
        if(S[j] === C) arr[j] = 0;
        else{
            for(var k = 0; k < list.length; k++){
                var dis = Math.abs(list[k] - j) ;
                if(dis < min) {
                    min = dis;
                }
            }
            arr[j] = min;
        }
    }
    return arr;
};
