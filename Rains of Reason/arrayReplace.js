function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray.forEach((num, index) => {
        if (num == elemToReplace)
            inputArray[index] = substitutionElem;
    })
    
    return inputArray;
}