var hasAlternatingBits = function(n) {
    var str = n.toString(2);
    for(var i = 0; i < str.length - 1; i++){
        if(str[i] === str[i+1]) return false;
    }
    return true;
};
