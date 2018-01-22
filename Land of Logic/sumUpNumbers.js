function sumUpNumbers(inputString) {
    var items = inputString.replace(/[^0-9\s]/g, '').split(' ').filter(word => word != ''),
        sum = 0;
    
    items.forEach((item, index) => {
       sum += parseInt(item); 
    });
    
    return sum > 0 ? sum : 0;
}