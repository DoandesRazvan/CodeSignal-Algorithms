function areSimilar(a, b) {
    if (a.toString() == b.toString())
        return true;
    
    var firstArrValues = [],
        secondArrValues = [];
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            firstArrValues.push(a[i]);
            secondArrValues.push(b[i]);
        }
    }
    
    secondArrValues = secondArrValues.reverse();
    
    if (firstArrValues.length == 2 && firstArrValues.toString() == secondArrValues.toString())
        return true;
    
    return false;
}