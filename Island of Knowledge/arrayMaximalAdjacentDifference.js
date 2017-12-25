function arrayMaximalAdjacentDifference(inputArray) {
    var maxDifference = 0;
    
    inputArray.forEach((int, index) => {
        let difference = Math.abs(inputArray[index] - inputArray[index - 1]);
        
        maxDifference = (difference > maxDifference) ? difference : maxDifference;
    });
    
    return maxDifference;
}