function arrayChange(inputArray) {
    var moves = 0;
    
    inputArray.forEach((number, index) => {
        if (index != 0) {
            for (let i = number; i <= inputArray[index - 1]; i++) {
                inputArray[index]++;
                moves++;
            }
        }
    });
    
    return moves;
}