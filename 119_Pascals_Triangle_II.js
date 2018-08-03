var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];
    var arr = getRow(rowIndex-1);
    var res = [1];
    for(var i = 1; i < rowIndex; i++){
        res[i] = arr[i-1]+arr[i];
    }
    res[i] = 1;
    return res;
};
