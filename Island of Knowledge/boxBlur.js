function boxBlur(image) {
    var output = [];
    
    for (let y = 2; y < image.length; y++) {
        var column = [];
        
        for (let x = 2; x < image[y].length; x++) {
            let sum = 0;
            
            for (let j = y - 2; j <= y; j++) {
                for (let i = x - 2; i <= x; i++) {
                    sum += image[j][i];
                }
            }
            
            column.push(Math.floor(sum / 9));
        }
        
        output.push(column);
    }
    
    return output;
}