var distributeCandies = function(candies) {
    var halfLen = Math.floor(candies.length/2);
    candies = Array.from(new Set(candies));
    return Math.min(candies.length, halfLen);
};
