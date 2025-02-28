function isWinner(countryName){
    const winner = db.getWinner(countryName).catch(()=>{
        return `${countryName} never was a winner`;
    });
    if (winner === undefined) return `${countryName} never was a winner`;

    if (winner.continent !== 'Europe') return `${countryName} is not what we are looking for because of the continent`;

    const result = db.getResults(winner.id)
    if (result.lenght < 3) return `${countryName} is not what we are looking for because of the number of times it was champion`;

    let resultYear = [];
    let resultScore = [];
    result.array.forEach(e => {
        resultYear.push(e.year);
        resultScore.push(e.score)
    });
    return `${countryName} won the FIFA World Cup in ${resultYear.join(', ')} winning by ${resultScore.join(', ')}`;
};