async function isWinner(countryName){
    const winner = await db.getWinner(countryName).catch(()=>`${countryName} never was a winner`);
    if (typeof winner === 'string') return `${countryName} never was a winner`;

    if (winner.continent !== 'Europe') return `${countryName} is not what we are looking for because of the continent`;

    const result = await db.getResults(winner.id);
    if (result.length < 3) return `${countryName} is not what we are looking for because of the number of times it was champion`;

    let resultYear = [];
    let resultScore = [];
    result.forEach(e => {
        resultYear.push(e.year);
        resultScore.push(e.score)
    });
    return `${countryName} won the FIFA World Cup in ${resultYear.join(', ')} winning by ${resultScore.join(', ')}`;
};
