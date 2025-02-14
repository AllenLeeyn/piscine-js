const ionRegexp = /([a-zA-Z]+t)(?=ion)/g;

const ionOut = (str) => {
    const matchArr = str.match(ionRegexp);
    if (matchArr === null){
        return [];
    };
    return matchArr;
};
