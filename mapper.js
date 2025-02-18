const baseFlat = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++){
                result.push(arr[i][j]);
            };
            continue;
        }
        result.push(arr[i]);
    };
    return result;
};

const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr);
    };
};

const map = (arr, fn) => {
    const result = [];
    forEach(arr, (x) => result.push(fn(x)));
    return result;
};

const flatMap = (arr, fn) => {
    const result = map(arr, fn);
    return baseFlat(result);
};
