var maxAreaOfIsland = function(grid) {
    var max = 0;
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                num = 0;
                dp(grid,i,j);
                max = Math.max(num, max);
            }
        }
    }
    return max;
};
function dp(arr,i,j){
    if(i < 0 || i >= arr.length || j < 0 || j >= arr[0].length || arr[i][j] === 0) return;
    arr[i][j] = 0;
    num++;
    dp(arr,i-1,j); // T
    dp(arr,i,j+1); // R
    dp(arr,i+1,j); // B
    dp(arr,i,j-1); // L
}
