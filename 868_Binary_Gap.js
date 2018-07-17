var binaryGap = function(N) {
    var str = N.toString(2),
        maxLen = 0;
    for(var i = 0; i < str.length - 1; i++){
        if(str[i] == '1'){
            findNext = [].indexOf.call(str,'1',i+1);
            if(findNext > -1) maxLen = Math.max((findNext-i),maxLen);
        }
    }
    return maxLen;
    
};
