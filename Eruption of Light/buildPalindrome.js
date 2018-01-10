function buildPalindrome(st) {
    function isPalindrome(str) {
        let reverseStr = str.split('').reverse().join('');
        
        return str == reverseStr;
    }
    
    let chunk = '';
    
    for (let char of st) {
        if (isPalindrome(st + chunk)) break;
        
        chunk = char + chunk;
    }
    
    return st + chunk;
}