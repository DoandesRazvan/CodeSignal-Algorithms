function palindromeRearranging(inputString) {
    var inputStringCharArr = inputString.split(''),
        letters = {},
        oddCount = 0;
    
    for (let i = 0; i < inputStringCharArr.length; i++) {
        if(!letters.hasOwnProperty(inputStringCharArr[i])) {
            letters[inputStringCharArr[i]] = 1;
        } else {
            letters[inputStringCharArr[i]]++;
        }
    }
    
    for (key in letters) {
        if (letters[key] % 2 != 0) {
            oddCount++;
        }
    }
    
    return oddCount <= 1 ? true : false;
}