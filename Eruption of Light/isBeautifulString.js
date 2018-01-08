function isBeautifulString(inputString) {
    function count(char) {
        let regex = new RegExp(char, 'g'),
            matches = inputString.match(regex);
        
        return matches ? matches.length : 0;
    }
    
    var limit = 1e9;
    
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        let charCount = count(char);
        
        if (charCount > limit) return false;
        
        limit = charCount;
    }
    
    return true;
}