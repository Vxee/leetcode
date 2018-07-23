var calPoints = function(ops) {
    var score = [],
        count = 0,
        op = 0;
    for(var i = 0; i < ops.length; i++){
        op = ops[i];
        if(op === 'C'){
            score.pop();
        }
        else if(op === 'D'){
            var arr = score.slice(-1);
            score.push(arr[0]*2);
        }
        else if(op === '+'){
            var arr = score.slice(-2);
            score.push(arr[0]+arr[1]);
        }
        else{
            score.push(parseInt(op));
        } 
    }
    
    for(var i = 0; i < score.length; i++){
        count+=score[i];
    }
    return count;
};
