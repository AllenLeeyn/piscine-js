const pick = (obj, strArr) => {
    if (typeof strArr === 'string') strArr = [strArr];
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)){
        (strArr.includes(key)) ? objArr.push([key, value]):null;
    };
    return Object.fromEntries(objArr);
};

const omit = (obj, strArr) => {
    if (typeof strArr === 'string') strArr = [strArr];
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)){
        (!strArr.includes(key)) ? objArr.push([key, value]):null;
    };
    return Object.fromEntries(objArr);
};