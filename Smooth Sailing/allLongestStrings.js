function allLongestStrings(inputArray) {
    var len = 0;
    
    for (let i = 0; i < inputArray.length; i++)
        inputArray[i].length > len ? len = inputArray[i].length : len;
    
    var newArr = inputArray.filter(string => {
        return string.length >= len;
    })
    
    return newArr;
}