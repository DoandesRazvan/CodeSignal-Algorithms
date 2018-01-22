function differentSquares(matrix) {
    let squares = [];
    
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let square =  matrix[i][j].toString() +
                          matrix[i][j + 1].toString() +
                          matrix[i + 1][j].toString() +
                          matrix[i + 1][j + 1].toString();
            
            if (!squares.includes(square)) squares.push(square);
        }        
    }
    
    return squares.length;
}