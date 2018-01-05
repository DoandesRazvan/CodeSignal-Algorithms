function firstDigit(inputString) {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
     
    for (let i = 0; i < inputString.length; i++) {
        if (digits.indexOf(inputString[i]) != -1)
            return inputString[i];
    }
}