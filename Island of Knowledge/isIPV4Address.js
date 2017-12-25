function isIPv4Address(inputString) {
    inputString = inputString.split('.');
    
    if (inputString.length != 4)
        return false;
    
    for (let i = 0; i < inputString.length; i++) {
        inputString[i].match(/[a-z]/i) ? number = 'not a number' : number = parseInt(inputString[i]);
            
        if (!(number >= 0 && number <= 255))
            return false;
    }
    
    return true;
}