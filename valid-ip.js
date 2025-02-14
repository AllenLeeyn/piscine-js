const getMatchRegExp = (dataSet, qry) => {
    const matchArr = dataSet.match(qry);
    if (matchArr === null){
        return []
    };
    return matchArr;
};

const isValidIP = (ipAdd) => {
    const qry = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/;
    const parts = ipAdd.split('.');
    for (const part of parts){
        if (!qry.test(part)){
            return false;
        };
    };
    return true;
};

const isValidPort = (portNum) => {
    const qry = /^([1-5]?\d{1,4}|6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3})$/;
    return qry.test(portNum);
};

const findIP = (dataSet) => {
    const ipQry = /((\d+\.){3}\d+)(:\d+)?/g;
    const ipArr = getMatchRegExp(dataSet, ipQry);
    const result = [];
    for (const ip of ipArr){
        let parts = ip.split(':')
        if (isValidIP(parts[0])){
            if (parts.length === 1 || isValidPort(parts[1])){
                result.push(ip);
            };
        };
    };
    return result;
};
