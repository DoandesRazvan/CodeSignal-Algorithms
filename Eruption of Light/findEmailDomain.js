function findEmailDomain(address) {
    var symbolIndex = address.lastIndexOf('@'),
        domain = address.split('').splice(symbolIndex + 1);
    
    domain = domain.join('');
    
    return domain;
}