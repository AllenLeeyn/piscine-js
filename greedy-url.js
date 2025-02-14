const getMatchRegExp = (dataSet, qry) => {
    const matchArr = dataSet.match(qry);
    if (matchArr === null){
        return []
    };
    return matchArr;
};

const getURL = (dataSet) => {
    return getMatchRegExp(dataSet, /((http|https):\/\/([a-zA-Z0-9-_.\/?=&#\|\[\],@%]+))/g);
};

const greedyQuery = (dataSet) => {
    const matchArr = getURL(dataSet);
    const result = [];
    const qry = /((\?|&)[\w]+=[a-zA-Z0-9\[\],%-]+)/g;
    for (const matchURL of matchArr){
        if (getMatchRegExp(matchURL, qry).length > 2){
            result.push(matchURL);
        };
    };
    return result;
};
const notSoGreedy = (dataSet) => {
    const matchArr = getURL(dataSet);
    const result = [];
    const qry = /((\?|&)[\w]+=[a-zA-Z0-9\[\],%-]+)/g;
    for (const matchURL of matchArr){
        const count = getMatchRegExp(matchURL, qry).length;
        if (count > 1 && count <= 3){
            result.push(matchURL);
        };
    };
    return result;
};
