var reverseString = function(s) {
    return Array.prototype.reverse.apply(s.split('')).join('');
};
