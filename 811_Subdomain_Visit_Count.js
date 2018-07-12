var subdomainVisits = function(cpdomains) {
    let obj = {};
    let result = [];
    cpdomains.forEach(element => {
        const val = parseInt(element.split(" ")[0]);
        let domin = element.split(" ")[1];
        
        let index = domin.indexOf(".");
        let dominList = [];
        dominList.push(domin);
        
        while(index > -1){
            domin = domin.slice(index+1);
            index = domin.indexOf(".");
            dominList.push(domin);
        }
        dominList.forEach(d => {
            obj[d] = obj[d] ? obj[d]+val : val;
        })     
    });
    for(let key in obj){
        result.push(obj[key]+" "+key);
    }
    return result;
};
