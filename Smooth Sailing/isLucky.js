function isLucky(n) {
    var numToStr = n.toString().split(''),
        firstSum = 0,
        secondSum = 0;
    
    for (let i = 0; i < numToStr.length; i++) {
        if (i < numToStr.length / 2)
            firstSum += parseInt(numToStr[i]);
        else
            secondSum += parseInt(numToStr[i]);
    }
    
    return firstSum == secondSum ? true : false;
}