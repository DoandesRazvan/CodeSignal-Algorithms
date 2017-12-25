function sortByHeight(a) {
    var humans = [],
        humansIndex = 0;
    
    a.forEach(human => {
        human != -1 ? humans.push(human) : human;
    });
    
    humans.sort((a, b) => {
        return a - b;
    })
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = humans[humansIndex];
            humansIndex++;
        }
    }
    
    return a;
}