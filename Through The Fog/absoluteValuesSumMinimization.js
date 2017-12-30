function absoluteValuesSumMinimization(a) {
    // brute force solution, not the most optimal.

    let allSums = [],
        lowestValue,
        lowestValueXs = [];
    
    for (let x = 0; x < a.length; x++) {
        let sum = 0;
        
        for (let i = 0; i < a.length; i++) {
            sum += Math.abs(a[i] - a[x]);
        }
        
        allSums.push(sum);
    }
    
    lowestValue = allSums.sort((a,b) => a - b)[0];
    
    for (let j = 0; j < allSums.length; j++) {
        if (lowestValue > allSums[j]) lowestValue = allSums[j];
    }

    for (let q = 0; q < allSums.length; q++) {
        if (lowestValue == allSums[q]) lowestValueXs.push(a[q]);
    }
    
    return lowestValueXs.sort((a,b) => a - b)[0];
}