/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    // es6
    let max = Math.max(...A);
    // es5
    //var max = Math.max.apply(null,A);
    return A.indexOf(max);
};
