function isMAC48Address(inputString) {
    const splitAddress = inputString.split('-');
    
    for (let i = 0; i < splitAddress.length; i++) {
        const group = splitAddress[i].split('');
        
        if (group.length != 2) return false;
        
        for (let j = 0; j < group.length; j++) {
            const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                  letters = ['A', 'B', 'C', 'D', 'E', 'F'],
                  currentIndex = group[j];
            
            if (digits.indexOf(currentIndex) == -1 && letters.indexOf(currentIndex) == -1)
                return false;
        }
    }
    
    return true;
}