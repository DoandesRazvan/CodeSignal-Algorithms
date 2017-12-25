function almostIncreasingSequence(sequence) {
    var count = 0;
    
    for (let i = 1; i < sequence.length; i++){
        if (sequence[i] <= sequence[i-1]) {
            count++;
        
            if (sequence[i] >= sequence[i+1] && sequence[i + 1] > sequence[i - 2])
                return false;
        }
    }
    
    if (count > 1)
        return false;
    
    return true;
}