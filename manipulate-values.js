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

const reduceValues = (obj, fn, acc) => {
    acc = (acc === undefined) ? 0 : acc;
    for (const [key, value] of  Object.entries(obj)) {
        acc = fn(acc, value)
    };
    return acc;
};
