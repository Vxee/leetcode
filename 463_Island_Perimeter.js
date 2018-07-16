var islandPerimeter = function(grid) {
	var count = 0, // 1 的个数
		temp = 0,	// 相邻的个数
		x = grid.length,
		y = grid[0].length;  
    for(var i = 0; i < x; i++){
    	for(var j = 0; j < y; j++){
    		if(grid[i][j] == 1){
    			count++;
    			if(i < x -1 && grid[i+1][j] == 1) temp++;
    			if(j < y -1 && grid[i][j+1] == 1) temp++;
    		}

    	}
    }
    return 4 * count - temp*2;
};
