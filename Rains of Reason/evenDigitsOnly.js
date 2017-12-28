function evenDigitsOnly(n) {
    var nToSplit = n.toString().split('');
    
    for (let i = 0; i < nToSplit.length; i++) {
        let number = parseInt(nToSplit[i]);
        
        if (number % 2 != 0)
            return false;
    }
    
    return true;
}