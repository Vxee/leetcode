var transpose = function(A) {
    var b = new Array(A[0].length);
    for(var i = 0; i < b.length; i++){
        b[i] = [];
    }
    for(var i = 0; i < A.length; i++){
        //var c=[];
        for(var j = 0; j < A[i].length; j++){
            b[j][i] = A[i][j];
        }
    }
    return b;
};
