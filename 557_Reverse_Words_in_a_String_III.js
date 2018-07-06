var reverseWords = function(s) {
    let reverse = Array.prototype.reverse;
    let arr = s.split(' ').map(item => {
        return reverse.apply(item.split('')).join('');
    })
    return arr.join(' ');
    
};
