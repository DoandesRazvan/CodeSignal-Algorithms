function shapeArea(n) {
    var area = 1, increment = 4;
    
    for (let i = 2; i <= n; i++) {
      area += increment;
      
      increment += 4;
    }
    
    return area;
}