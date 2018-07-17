var search = function(nums, target) {
    var left = 0,
        right = nums.length-1,
        index = Math.floor(right / 2);
    while(left <= right){
        if(target == nums[index]){
            return index;
        }
        else if(target < nums[index]){
            right = index - 1;
            index = Math.floor((left + right) / 2);
        }
        else{
            left = index+1;
            index = Math.floor((left + right) / 2);
        } 
    }
    return -1;
};
