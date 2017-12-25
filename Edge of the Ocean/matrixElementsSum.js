function matrixElementsSum(matrix) {
    var floorIndexes = [],
        roomIndexes = [],
        price = 0;
    
    matrix.forEach((floor, floorIndex) => {
        floor.forEach((room, roomIndex) => {
            if (room == 0) {
                floorIndexes.push(floorIndex);
                roomIndexes.push(roomIndex);
            }
        });
    });
    
    for(let i = 0; i < matrix.length; i++) {
        for(let x = 0; x < matrix[i].length; x++) {
            let currentRoomIndex = roomIndexes.indexOf(x);
            
            if (currentRoomIndex != -1 && floorIndexes[currentRoomIndex] < i)
                matrix[i][x] = 0;
            
            price += matrix[i][x];
        }
    }
    
    return price;
}