const filterKeys = (obj, fn) => {
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)) {
        if (fn(key)) objArr.push([key, value]);
    };
    return Object.fromEntries(objArr);
};

const mapKeys = (obj, fn) => {
    const objArr = [];
    for (const [key, value] of  Object.entries(obj)) {
        objArr.push([fn(key), value]);
    };
    return Object.fromEntries(objArr);
};

const reduceKeys = (obj, fn, acc) => {
    for (const [key, value] of  Object.entries(obj)) {
        acc = (acc === undefined) ? key : fn(acc, key) ;
    };
    return acc;
};
