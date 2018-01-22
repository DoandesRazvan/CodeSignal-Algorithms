function deleteDigit(n) {
    let splitN = n.toString().split(''),
        splitNums = [];
    
    for (let i = 0; i < splitN.length; i++) {
        let num = '';
        
        for (let j = 0; j < splitN.length; j++) {
            if (j != i) {
                num += splitN[j];
            }
        }
        
        splitNums.push(parseInt(num));
    }
    
    return splitNums.reduce((a,b) => Math.max(a, b));
}