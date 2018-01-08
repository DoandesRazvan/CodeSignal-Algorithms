function digitDegree(n) {
    function sumDigits(num) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }
    
    var degree = 0;
    
    for (; n > 9; degree++) {
        n = sumDigits(n);        
    }
    
    return degree;
}