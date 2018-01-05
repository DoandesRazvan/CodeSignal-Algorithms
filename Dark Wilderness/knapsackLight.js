function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let carryOne = weight1 <= maxW ? true : false,
        carryTwo = weight2 <= maxW ? true : false;
    
    if (carryOne == true && carryTwo == true) {
        if (weight1 + weight2 <= maxW)
            return value1 + value2;
        
        return value1 > value2 ? value1 : value2;
    } else if (carryOne == true && carryTwo == false)
        return value1;
    else if (carryOne == false && carryTwo == true)
        return value2;
    else
        return 0;
}