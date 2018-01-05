function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0,
        days = 1;
    
    while (currentHeight < desiredHeight) {
        currentHeight += upSpeed;
        
        if (currentHeight >= desiredHeight)
            return days;
        else {
            currentHeight -= downSpeed;
            days++;
        }
    }
    
    return days;
}