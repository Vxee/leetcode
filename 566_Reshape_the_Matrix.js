var matrixReshape = function(nums, r, c) {
    var x = nums.length,
        y = nums[0].length,
        list = [],
        arr = [],
        count = 0;
    if(x*y != r*c) return nums;
    for(var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
           arr.push(nums[i][j]); 
        }
    }
    for(var i = 0; i < r; i++){
        list[i] = [];
        for(var j = 0; j < c; j++){
            list[i][j] = arr[count++];
        }
    }
    return list;
    
};
