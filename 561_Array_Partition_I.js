var arrayPairSum = function(nums) {
    var count = 0;
    nums.sort((a,b) => a-b);
    nums.forEach((item, index) => {
        if(index % 2 === 0) count+=item;
    })
    return count;
};
