const citiesOnly = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.map(obj => obj.city);
};

const capitalize = (str) => {
    const strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        let curStr = strArr[i].split('');
        curStr[0] = curStr[0].toUpperCase();
        strArr[i] = curStr.join('');
    };
    return strArr.join(' ');
};

const upperCasingStates = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.map(str => capitalize(str));
};

const fahrenheitToCelsius = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.map(val => {
        const qry = /-?[0-9]+/;
        val = val.match(qry);
        return Math.floor((Number(val) - 32) * (5/9)) + '°C'
    });
};

const trimTemp = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.map(obj => {
        obj.temperature = obj.temperature.replaceAll(' ', '');
        return obj;
    });
};

const tempForecasts = (arr) => {
    if (!Array.isArray(arr)) return;
    
    return arr.map(obj => {
        const qry = /-?[0-9]+/;
        let val = obj.temperature.match(qry);
        obj.temperature = Math.floor((Number(val) - 32) * (5/9)) + '°C'

        obj.city = capitalize(obj.city);
        obj.state = capitalize(obj.state);
        return obj.temperature + 'elsius in ' + obj.city + ', ' + obj.state;
    });
};
