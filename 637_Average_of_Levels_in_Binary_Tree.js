var averageOfLevels = function(root) {
    var queue = [],
        res = [];
    if(root != null) queue.push(root);
    while(queue.length > 0){
        var sum = 0,
            count = 0;
        var temp = [];
        while(queue.length > 0){
            q = queue.shift();
            count++;
            sum+=q.val;
            if(q.left){
                temp.push(q.left);
            } 
            if(q.right) {
                temp.push(q.right);
            }
        }
        queue = temp;
        res.push(sum/count);
    }
    return res;
};
