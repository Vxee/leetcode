var numJewelsInStones = function(J, S) {
    var arr = [],
        count = 0;
    for(var i = 0; i < J.length; i++){
        arr.push(J[i]);
    }
    for(var j = 0; j < S.length; j++){
        if(arr.indexOf(S[j]) > -1) count++;
    }
    return count;
};
