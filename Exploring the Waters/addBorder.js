function addBorder(picture) {
    // made with the assumption that the first and last string can have different lengths.
    
    picture.forEach((string, index, arr) => {
       arr[index] = '*' + string + '*'; 
    });
    
    var firstBorder = "",
        secondBorder = "";
    
    picture[0].split('').forEach(character => {
        firstBorder += '*';
    });
    
    picture[picture.length - 1].split('').forEach(character => {
        secondBorder += '*';
    });
    
    // probably can combine this into one single line
    picture.unshift(firstBorder);
    picture.push(secondBorder);
    
    return picture;
}