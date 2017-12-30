function depositProfit(deposit, rate, threshold) {
    let years = 0;
    
    while (deposit < threshold) {
        deposit += (rate / 100 * deposit);
        years++;
    }
    
    return years;
}