const getMatchRegExp = (dataSet, qry) => {
    const matchArr = dataSet.match(qry);
    if (matchArr === null){
        return []
    };
    return matchArr;
};

const groupPrice = (priceList) => {
    const qry = /(\$|€|[A-Z]{3,3})[0-9]+.[0-9]{2,2}/g;
    let prices = getMatchRegExp(priceList, qry);
    for (let i = 0; i < prices.length; i++){
        let digits = getMatchRegExp(prices[i], /[0-9]+/g);
        prices[i] = [prices[i]];
        for (const digit of digits){
            prices[i].push(digit);
        };
    };
    return prices;
};
