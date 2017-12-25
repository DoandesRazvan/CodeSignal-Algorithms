function avoidObstacles(inputArray) {
    inputArray.sort((a, b) => a - b);
    
    for (let i = 1; i <= inputArray[inputArray.length - 1] + 1; i++) {
        if (inputArray.every(number => { 
            return number % i != 0;
        })) {
            return i;
        }
    }    
}