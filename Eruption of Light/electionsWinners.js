function electionsWinners(candidates, k) {
    const max = Math.max(...candidates);
    
    return k ? (candidates.filter(votes => votes + k > max).length) : (candidates.filter(votes => votes == max).length > 1 ? 0 : 1);
}