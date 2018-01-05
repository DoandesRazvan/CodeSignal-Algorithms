function arrayMaxConsecutiveSum(inputArray, k) {
//     var biggestSum = 0;
    
//     for (let i = 0; i < inputArray.length; i++) {
//         let currentSum = 0;
        
//         for (let j = i; j < k + i; j++) {
//             currentSum += inputArray[j];
//         }
        
//         if (currentSum > biggestSum) biggestSum = currentSum;
//     }
    
//     return biggestSum;

    var latestSum = 0, 
        biggestSum = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
        latestSum += inputArray[i];
        
        if (i >= k) latestSum -= inputArray[i - k];
        
        if (latestSum > biggestSum) biggestSum = latestSum;
    }
    
    return biggestSum;
}