function alternatingSums(a) {
    var teamOne = 0,
        teamTwo = 0;
    
    a.forEach((person, index) => {
        if (index % 2 === 0)
            teamOne += person;
        else
            teamTwo += person;
    });
    
    return [teamOne, teamTwo];
}