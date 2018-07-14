var titleToNumber = function(s) {
    var sum = 0;
    s.split("").reverse().forEach( (item,index) => {
        sum+=(item.charCodeAt()-64)*Math.pow(26,index);
    });
    return sum;
};
