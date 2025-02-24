const filterEntries = (obj, fn) => {
    const objArr = [];
    for (const [key, val] of  Object.entries(obj)){
        if (fn([key, val])) objArr.push([key, val]);
    };
    return Object.fromEntries(objArr);
};
const mapEntries = (obj, fn) => {
    const objArr = [];
    for (const [key, val] of  Object.entries(obj)){
        objArr.push(fn([key, val]));
    };
    return Object.fromEntries(objArr);
};

const reduceEntries = (obj, fn, acc) => {
    for (const [key, val] of  Object.entries(obj)) {
        acc = fn(acc, [key, val]) ;
    };
    return acc;
};

const formatNumber = (num) => {
    let numStr = num.toString();
    const zeroRegex = /(?!(\.(\d+)?))(0){3,}1$/;
    const zerosStr = numStr.match(zeroRegex);
    if (zerosStr){
        numStr = numStr.replace(zerosStr[0], '');
    };
    const nineRegex = /(?!(\.(\d+)?))(9){3,}9$/;
    const nineStr = numStr.match(nineRegex);
    if (nineStr){
        numStr = numStr.replace(nineStr[0], '');
        let numParts = numStr.split('.');
        numParts[1] = String(Number(numParts[1])+1)
        numStr = numParts.join('.');
    };
    return Number(numStr);
};

const totalCalories = (obj) => reduceEntries(obj, (acc = 0, [key, val]) => {
    return formatNumber(acc + (val/100)*nutritionDB[key].calories);
});

const lowCarbs = (obj) => filterEntries(obj, ([key, val]) => {
    return ((val/100 * nutritionDB[key].carbs) < 50)
});

const cartTotal = (obj) => mapEntries(obj, ([key, val]) => {

    return [key, {
        calories: formatNumber((val/100)*nutritionDB[key].calories),
        protein: formatNumber((val/100)*nutritionDB[key].protein),
        carbs: formatNumber((val/100)*nutritionDB[key].carbs),
        sugar: formatNumber((val/100)*nutritionDB[key].sugar),
        fiber: formatNumber((val/100)*nutritionDB[key].fiber),
        fat: formatNumber((val/100)*nutritionDB[key].fat),
    }]
});
