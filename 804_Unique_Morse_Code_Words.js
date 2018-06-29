let uniqueMorseRepresentations = function(words) {
    let passwords = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    sets = new Set();
    words.forEach(item => {
        let arr = item.split("");
        let str = '';
        arr.forEach(value => {
            str += passwords[value.charCodeAt() - 'a'.charCodeAt()];
        });
        sets.add(str);
    })
    return sets.size;
};
