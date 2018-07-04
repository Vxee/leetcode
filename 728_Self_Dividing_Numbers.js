var selfDividingNumbers = function(left, right) {
    var arr = [];
    for(var i = left; i <= right; i++){
        if(check(i)){
            arr.push(i);
        }
    }
    return arr;
    
};
function check(i){
    var temp = i;
    while(temp > 0){
        var mark = temp % 10;
        if(i % mark != 0) return false;
        temp = Math.floor(temp / 10);
    }
    return true;
}
