const filterValues = (obj, fn) => {
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)) {
        if (fn(value, key, obj)) objArr.push([key, value]);
    };
    return Object.fromEntries(objArr);
};

const mapValues = (obj, fn) => {
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)) {
        objArr.push([key, fn(value)]);
    };
    return Object.fromEntries(objArr);
};

const reduceValues = (obj, fn) => {
    let result = 0;
    for (const [key, value] of  Object.entries(obj)) {
        result = fn(result, value)
    };
    return result;
};
