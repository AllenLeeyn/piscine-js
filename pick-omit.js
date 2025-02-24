const pick = (obj, strArr) => {
    if (typeof strArr === 'String') strArr = [strArr];
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)){
        for (const str of strArr) (str === String(key)) ? objArr.push([key, value]):null;
    };
    return Object.fromEntries(objArr);
};

const omit = (obj, strArr) => {
    if (typeof strArr === 'String') strArr = [strArr];
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)){
        for (const str of strArr) (str !== String(key)) ? objArr.push([key, value]):null;
    };
    return Object.fromEntries(objArr);
};