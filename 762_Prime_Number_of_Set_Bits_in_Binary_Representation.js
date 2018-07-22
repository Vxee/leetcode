var countPrimeSetBits = function(L, R) {
    var res = 0;
    for(var i = L; i <= R; i++){
        var str = i.toString(2),
            cnt = 0;
        for(var j = 0; j < str.length; j++){
            if(str[j] === '1'){
                cnt++;
            }
        }
        if(isPrim(cnt)) res++;
    }
    return res;
};
function isPrim(n){
    if(n==1) return false;
    for(var i = 2; i <= n/2; i++){
        if(n % i === 0) return false;
    }
    return true;
}
