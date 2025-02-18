const forEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr);
    };
};

const map = (arr, fn) => {
    const result = [];
    forEach(arr, (x, i, arr) => result.push(fn(x, i, arr)));
    return result;
};

const filter = (arr, fn) => {
    const result = [];
    forEach(arr, (x, i, arr) => (fn(x, i, arr)) ? result.push(x):null);
    return result;
};

const reject = (arr, fn) => {
    const result = [];
    forEach(arr, (x, i, arr) => (!fn(x, i, arr)) ? result.push(x):null);
    return result;
};

const partition = (arr, fn) => {
    return [filter(arr,fn), reject(arr,fn)];
};
