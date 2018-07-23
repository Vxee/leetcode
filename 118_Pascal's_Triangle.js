var generate = function(numRows) {
    var arr = [];
    for(var i = 0; i < numRows; i++){
        var child_arr = [];
        for(var j = 0; j <= i; j++){
            if(j == 0 || j == i)
                child_arr.push(1);
            else{
                child_arr.push(arr[i-1][j-1]+arr[i-1][j]);
            }
        }
        arr.push(child_arr);
    }
    return arr;
};
