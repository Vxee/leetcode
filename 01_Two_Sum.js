var twoSum = function(nums, target) {
    const len = nums.length;
    for(let i = len - 1; i >= 0; i--){
        const index = nums.indexOf(target - nums[i]);
        if( index > -1 && index != i){
            return new Array(index,i);
        }
    }
    return new Array(0,0);
};