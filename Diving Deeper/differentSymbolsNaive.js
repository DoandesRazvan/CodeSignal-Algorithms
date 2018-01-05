function differentSymbolsNaive(s) {
    var characters = [];
    
    for (let i = 0; i < s.length; i++) {
        if (characters.indexOf(s[i]) == -1)
            characters.push(s[i]);
    }
    
    return characters.length;
}