var findLUSlength = function(a, b) {
    if(a === b){
        return -1;
    }else{
        return Math.max(a.length, b.length);
    }
};
