function longestDigitsPrefix(inputString) {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        prefix = "";
    
    for (let i = 0; i < inputString.length; i++) {
        if (digits.indexOf(inputString[i]) == -1)
            return prefix;
        else
            prefix += inputString[i];
    }
 
    if (prefix != " ") return prefix;
}