var numJewelsInStones = function(J, S) {
    let arr = new Array(S.length);
    let count = 0;
    for(let len = S.length,i = 0; i < len; i++){
        arr[S[i]] = arr[S[i]] ? arr[S[i]] + 1 : 1;
    }
    for(let len = J.length, j = 0; j < len; j++){
        count += arr[J[j]] ? arr[J[j]] : 0;
    }
    return count;
};