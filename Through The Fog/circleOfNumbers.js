function circleOfNumbers(n, firstNumber) {
    var firstHalf = [],
        secondHalf = [];
    
    for (let i = 0; i < n; i++) {
        i <= Math.floor((n - 1) / 2) ? firstHalf.push(i) : secondHalf.push(i);
    }
    
    return firstHalf.indexOf(firstNumber) != -1 ? secondHalf[firstHalf.indexOf(firstNumber)] : firstHalf[secondHalf.indexOf(firstNumber)];
}