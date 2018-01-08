function bishopAndPawn(bishop, pawn) {
    const a = 'a'.charCodeAt()
    
    function getCoords(pos) {
        let x = pos.charCodeAt(0) - a,
            y = parseInt(pos[1]) - 1;
        
        return [x, y];
    }
    
    function getPos(x, y) {
        return String.fromCharCode(a + x) + (y + 1).toString();
    }
    
    const ways = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
    
    let bishopMoves = [],
        [x, y] = getCoords(bishop);
    
    for (let way of ways) {
        for (let steps = 1; ; steps++) {
            let currentX = steps * way[0] + x,
                currentY = steps * way[1] + y;
            
            if (currentX >= 0 && currentX <= 7 && currentY >= 0 && currentY <= 7) {
                bishopMoves.push(getPos(currentX, currentY));
            } else {
                break;
            }
        }
    }
    
    return bishopMoves.includes(pawn);
}