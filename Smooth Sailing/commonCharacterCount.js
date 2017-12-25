function commonCharacterCount(s1, s2) {
    let count = 0,
        newS2 = s2.split('');
    
    for (let i = 0; i < s1.length; i++) {
        let index = newS2.indexOf(s1.charAt(i));
        
        if (index != -1) {
            count++;
            
            newS2.splice(index, 1);
        }
    }
    
    // return s2.length - newS2.length; // works too
    
    return count;
}