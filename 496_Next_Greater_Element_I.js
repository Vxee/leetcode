var nextGreaterElement = function(findNums, nums) {
    for(var i = 0; i < findNums.length; i++){
        index = nums.indexOf(findNums[i]);
        flag = -1;
        for(var j = index+1; j < nums.length; j++){
            if(findNums[i] < nums[j]){
                flag = nums[j];
                break;
            }
        }
        findNums[i] = flag;
    }
    return findNums;
};
