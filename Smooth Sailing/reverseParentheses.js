function reverseParentheses(s) {
    if (s.includes('('))
        return reverseParentheses(reverseRecur(s))
    
    return s;
}

function reverseRecur(s) {
    let regExp = /\(([^()]*)\)/i,
        subStr = regExp.exec(s)[1];
    
    subStr = subStr.split('').reverse().join('');
    
    return s.replace(regExp, subStr);
}