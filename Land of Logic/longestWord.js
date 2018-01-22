function longestWord(text) {
    function isLetter(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
    }
    
    let words = [], 
        word = '';
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (isLetter(char)) {
            word += char;
        } else if (word.length > 0) {
            words.push(word);
            word = '';
        }
        
        if (i == text.length - 1 && word.length > 0)
            words.push(word);
    }
    
    return words.sort((a, b) => b.length - a.length)[0];
}