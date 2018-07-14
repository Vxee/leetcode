var numberOfLines = function(widths, S) {
    var len = S.length,
        row = 1,
        leftRoom = 100;
    for(var i = 0; i < len; i++){
        var index = S.charCodeAt(i)-97;
        
        if(leftRoom < widths[index]){
            row++;
            leftRoom = 100 - widths[index];
        }else{
            leftRoom -= widths[index];
        }
    }
    return new Array(row, 100 - leftRoom);
};
