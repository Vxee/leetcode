// 翻转图像

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(arr => arr.reverse().map(a1=> a1 === 1 ? 0 : 1));
};