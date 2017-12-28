function variableName(name) {
    name = name.toLowerCase();
    
    var firstChar = name[0],
        validChars = '0123456789qwertyuiopasdfghjklzxcvbnm_';
    
    if (!isNaN(parseInt(firstChar)) || firstChar === ' ' || validChars.indexOf(firstChar) == -1)
        return false;
    
    for (let i = 1; i < name.length; i++) {
        if (validChars.indexOf(name[i]) == -1)
            return false;
    }
    
    return true;
}