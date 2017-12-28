function alphabeticShift(inputString) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    inputString = inputString.toLowerCase().split('');
    
    inputString.forEach((letter, index) => {
        let alphabetIndex = alphabet.indexOf(letter);
        
        if (alphabetIndex == 25)
            inputString[index] = alphabet[0];
        else 
            inputString[index] = alphabet[alphabetIndex + 1];
    });
    
    return inputString.join('')
}