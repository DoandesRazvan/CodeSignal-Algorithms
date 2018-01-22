function lineEncoding(s) {
    let encoding = "",
        lastChar = "",
        occurences;
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        
        if (char == lastChar) {
            occurences++;
        } else {
            encoding += occurences > 1 ? occurences + lastChar : lastChar;
            
            lastChar = char;
            occurences = 1;
        }
    }
    
    encoding += occurences > 1 ? occurences + lastChar : lastChar;
    
    return encoding;
}