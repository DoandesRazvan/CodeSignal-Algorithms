function minesweeper(matrix) {
    var output = [];
    
    for (let y = 0; y < matrix.length; y++) {
        let column = [];
        
        for (let x = 0; x < matrix[y].length; x++) {
            let neighboringMinesCount = 0;
            
            // above
            if (matrix[y - 1] != undefined && matrix[y - 1][x] === true)
                neighboringMinesCount++;
            
            // below
            if (matrix[y + 1] != undefined && matrix[y + 1][x] === true)
                neighboringMinesCount++;
            
            // right
            if (matrix[y] != undefined && matrix[y][x + 1] === true)
                neighboringMinesCount++;
            
            // left
            if (matrix[y] != undefined && matrix[y][x - 1] === true)
                neighboringMinesCount++;
            
            // top left
            if (matrix[y - 1] != undefined && matrix[y - 1][x - 1] === true)
                neighboringMinesCount++;
            
            // top right
            if (matrix[y - 1] != undefined && matrix[y - 1][x + 1] === true)
                neighboringMinesCount++;
            
            // bottom left
            if (matrix[y + 1] != undefined && matrix[y + 1][x - 1] === true)
                neighboringMinesCount++;
            
            // bottom right
            if (matrix[y + 1] != undefined && matrix[y + 1][x + 1] === true)
                neighboringMinesCount++;
            
            column.push(neighboringMinesCount);
        }
        
        output.push(column);
    }
    
    return output;
}