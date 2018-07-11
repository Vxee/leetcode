var findWords = function(words) {
    var lists = [
        ["q","w","e","r","t","y","u","i","o","p"],
        ["a","s","d","f","g","h","j","k","l"],
        ["z","x","c","v","b","n","m"]
                ];
    var arr = [];
    for(var i = 0; i < words.length; i++){
        var flag = -1,
            count = 0;
        for(var j = 0; j < words[i].length; j++){
            for(var k = 0; k < 3; k++){
                if((flag == -1 || flag == k) && lists[k].indexOf(words[i][j].toLowerCase()) > -1){
                    if(flag == -1){
                        flag = k;count++;
                    }else if(flag == k){
                        count++;
                    }
                    if(count == words[i].length) arr.push(words[i]); 
                } 
            }
            
        }  
    }
    return arr;
};
