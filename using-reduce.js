const adder = (arr, initNum) => {
    if (!Array.isArray(arr)) return;
    if (initNum === undefined) initNum = 0;
    return arr.reduce((sumVal, curVal) => sumVal + curVal, initNum);
};

const sumOrMul = (arr, initNum) => {
    if (!Array.isArray(arr)) return;
    if (initNum === undefined) initNum = 0;
    return arr.reduce((sumVal, curVal) => {
        if (curVal%2 == 0) return sumVal * curVal;
        if (curVal%2 == 1 || curVal%2 == -1) return sumVal + curVal;
    }, initNum);
};

const funcExec = (arr, initNum) => {
    if (!Array.isArray(arr)) return;
    if (initNum === undefined) initNum = 0;
    return arr.reduce((sumVal, curFunc) => curFunc(sumVal), initNum);
};

console.log(adder([]))//, 0))