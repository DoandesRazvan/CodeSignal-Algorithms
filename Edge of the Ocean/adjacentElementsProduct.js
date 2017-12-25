function adjacentElementsProduct(inputArray) {
    var highestProduct = inputArray[0] * inputArray[1],
        product;
    
    for (let i = 1; i < inputArray.length - 1; i++) {
        product = inputArray[i] * inputArray[i + 1];
        
        if (product > highestProduct)
            highestProduct = product;
    }
    
    return highestProduct;
}