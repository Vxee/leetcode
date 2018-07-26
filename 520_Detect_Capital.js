var detectCapitalUse = function(word) {
    return /[A-Z][a-z]+|[A-Z]+|[a-z]+/g.exec(word)[0] === word;
};
