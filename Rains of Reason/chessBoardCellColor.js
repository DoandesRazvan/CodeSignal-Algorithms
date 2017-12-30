function chessBoardCellColor(cell1, cell2) {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        chessBoard = [];
    
    for (let i = 1; i <= 8; i++) {
        let color = i % 2 == 0 ? 'light' : 'dark';
        
        for (let j = 0; j < 8; j++) {
            let cell = [letters[j] + i, color];
            
            color = color == 'light' ? color = 'dark' : color = 'light'; 
            
            chessBoard.push(cell);
        }
    }
    
    for (let j = 0; j < chessBoard.length; j++) {
        if (chessBoard[j][0] == cell1)
            cell1 = chessBoard[j][1];
        
        if (chessBoard[j][0] == cell2)
            cell2 = chessBoard[j][1];
    }
    
    return cell1 == cell2 ? true : false;
}