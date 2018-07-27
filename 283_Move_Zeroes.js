var moveZeroes = function(nums) {
    var index = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i]){
            nums[index++] = nums[i];
        }
    }
    for(var j = index; j < nums.length; j++){
        nums[j] = 0;
    }
};
